import {
  atom, useAtom, useAtomValue, useSetAtom,
} from 'jotai';
import React, {
  Suspense, useEffect, useMemo, useState,
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ActionButton } from 'src/components/ActionButton';
import { EditBox } from 'src/components/EditBox';
import { Fallback } from 'src/components/Fallback';
import { LinkButton } from 'src/components/LinkButton';
import { Popup } from 'src/components/Popup';
import { SecretCollectionsPath } from 'src/components/SecretCollectionsPath';
import { useModalState } from 'src/hooks/useModalState';
import { Secret } from 'src/model/Secret';
import { CollectionByIdState } from 'src/state/CollectionsListState';
import { SecretByIdState, SecretsListState } from 'src/state/SecretsListState';
import { dateTimeToView } from 'src/utils/dateUtils';
import { Checkbox } from 'src/components/Checkbox';
import { SecretBox } from 'src/components/SecretBox';
import { InfoMessage } from 'src/components/InfoMessage';
import { SecretContentType } from 'src/api/to/Secret';
import clsx from 'clsx';
import ArrowDown from '../assets/arrowDown.svg';
import KeyIcon from '../assets/key.svg';
import MeeButtonIcon from '../assets/meeButton.svg';
import FilterExpandIcon from '../assets/filterExpander.svg';

const ColumnsState = atom(new Map([
  ['Created', true], ['Modified', false], ['Username', true], ['URL', true],
]));

const ColumnsSelectPopup: React.FC = () => {
  const [columnsState, setColumnsState] = useAtom(ColumnsState);
  // eslint-disable-next-line no-console
  console.log(columnsState);
  return (
    <div className="absolute p-3 bg-primary-content pr-20 shadow-lg">
      <p className="text-sm font-bold text-alt-color-4 pb-2 text-left">Show:</p>
      {Array.from(columnsState.keys()).map((item) => (
        <div className="pt-4" key={item}>
          <Checkbox
            title={item}
            onChange={() => {
              setColumnsState((old) => {
                old.set(item, !old.get(item));
                return new Map(old);
              });
            }}
            value={columnsState.get(item) || false}
          />
        </div>
      ))}

    </div>
  );
};
interface SecretDetailsEditProps {
  collectionId: string;
  secretId?: string;
  isNew?: boolean;
  values?: Secret;
  onChange: (newValue: Secret) => void;
}

const SecretDetailsEdit: React.FC<SecretDetailsEditProps> = ({
  secretId, isNew, values, onChange, collectionId,
}) => {
  const defaultValues = {
    id: new Date().getTime().toString(),
    created: new Date(),
    modified: new Date(),
    name: '',
    note: '',
    url: '',
    collection_id: collectionId,
    username: '',
    secret: { data: '', content_type: SecretContentType.PlainText },
    ...values,
  };
  useEffect(() => {
    SecretByIdState.remove(secretId);
  }, [secretId]);
  return (
    <div>
      <EditBox onChange={(v) => onChange({ ...defaultValues, name: v })} isRequired value={values?.name || ''} title="Secret Name" />
      <EditBox onChange={(v) => onChange({ ...defaultValues, note: v })} value={values?.note || ''} title="Note" />
      <EditBox onChange={(v) => onChange({ ...defaultValues, url: v })} value={values?.url || ''} title="URL" />
      <SecretBox
        onChange={(v) => onChange({ ...defaultValues, secret: { ...defaultValues.secret, data: v } })}
        isHiddenByDefault={!isNew}
        value={values?.secret.data || ''}
        title={`Value${isNew ? '' : ' (read-only)'}`}
        isReadOnly={!isNew}
      />
    </div>
  );
};

interface SecretListItemProps {
  secretItem: Secret;
}

const SecretListItem: React.FC<SecretListItemProps> = ({
  secretItem,
}) => {
  const {
    id, name, note, created, username, url, modified, secret, collection_id: collectionId,
  } = secretItem;
  const popup = useModalState();
  const columnsState = useAtomValue(ColumnsState);
  const popupMessage = useModalState();
  const [secretDetails, setSecretDetails] = useAtom(SecretByIdState(id));
  const [newValues, setNewValues] = useState<Secret | undefined>(secretDetails);
  return (
    <div className="text-primary border-b border-alt-color-6 pb-5 mt-6 mx-5 last:border-b-0">
      {popupMessage.isOpened && (
        <InfoMessage
          message="Successfully saved!"
          onClose={() => {
            popupMessage.close();
          }}
        />
      )}
      {popup.isOpened && (
      <Popup
        onClose={() => {
          popup.close();
        }}
        title="Edit Secret"
        primaryButtonAction={() => {
          if (newValues) setSecretDetails(newValues);
          popupMessage.open();
          popup.close();
        }}
        primaryButtonTitle="Save Secret"
        secondaryButtonAction={() => {
          navigator.clipboard.writeText(secret.data);
        }}
        secondaryButtonTitle="Copy Value"
      >

        <Suspense fallback={<Fallback />}>
          <SecretDetailsEdit values={newValues} onChange={setNewValues} collectionId={collectionId} secretId={id} />
        </Suspense>
      </Popup>
      )}
      <div className="flex justify-start items-start md:items-center">
        <img className="h-[18px] mr-3 pt-1 md:hidden" src={KeyIcon} alt="key" />
        <div className="flex flex-col justify-between items-start md:items-center mr-auto md:flex-row">
          <div className="flex gap-3 md:gap-0 items-center md:pr-20 flex-1">
            <img className="h-[18px] mr-3 mt-1 hidden md:block" src={KeyIcon} alt="key" />
            <div>
              <p className="text-sm md:text-base leading-4 md:w-39 font-bold">{name}</p>
              <p className="text-xs md:text-sm leading-4 md:w-39 pt-1">{note}</p>
            </div>
          </div>
          {columnsState.get('Created') && (
          <p className="pt-1 text-xs font-medium md:w-32">
            <span className="text-alt-color-5 md:hidden">Date: </span>
            {dateTimeToView(created)}
          </p>
          )}
          {columnsState.get('Modified') && (
          <p className="pt-1 text-xs font-medium md:w-32 hidden md:block">
            {dateTimeToView(modified)}
          </p>
          )}
          <p className="pt-1 font-medium leading-4 md:w-16">
            <span className="text-alt-color-5 text-xs md:hidden">Value: </span>
            <span className="text-4xs">●●●●●●●●</span>
          </p>
          {columnsState.get('Username') && (
          <p className="pt-1 text-xs font-medium md:w-32">
            <span className="text-alt-color-5 md:hidden">Username: </span>
            {username}
          </p>
          )}
          {columnsState.get('URL') && (
          <p className="pt-1 text-xs font-medium md:w-45">
            <span className="text-alt-color-5 md:hidden">URL: </span>
            {url}
          </p>
          )}

        </div>
        <LinkButton onClick={() => popup.open()} title="Edit" />
      </div>
    </div>
  );
};

interface SecretsListSuspendedProps {
  collectionId:string;
  reverseOrder: boolean;
}

const SecretsListSuspended: React.FC<SecretsListSuspendedProps> = ({ collectionId, reverseOrder }) => {
  const secretsList = useAtomValue(SecretsListState(collectionId));
  const secretsListSorted: Secret[] | undefined = useMemo(() => secretsList?.sort((a, b) => (
    a.name.localeCompare(b.name) * (reverseOrder ? -1 : 1))), [secretsList, reverseOrder]);
  return (
    <div>
      {secretsListSorted?.map((secret) => (
        <SecretListItem key={secret.id} secretItem={secret} />
      ))}
    </div>
  );
};

interface ListHeadProps {
  onSort: () => void;
  reverseSortOrder: boolean;
}

const ListHead: React.FC<ListHeadProps> = ({ onSort, reverseSortOrder }) => {
  const columnsState = useAtomValue(ColumnsState);
  const [showColumnsSelectPopup, setShowColumnsSelectPopup] = useState(false);
  return (
    <div className="text-alt-color-4 text-base bg-secondary-content py-6 px-5 mx-2 items-center flex">
      <div className="flex gap-4 items-center md:w-46 md:mr-21">
        <button
          type="button"
          onClick={() => {
            setShowColumnsSelectPopup((old) => !old);
          }}
        >
          <img className="bg-primary-content" alt="columns select" src={FilterExpandIcon} />
          {showColumnsSelectPopup && <ColumnsSelectPopup />}
        </button>
        <p>
          Name
        </p>
        <button type="button" onClick={onSort}>
          <img className={clsx(reverseSortOrder && 'rotate-180')} alt="sort direction" src={ArrowDown} />
        </button>
      </div>
      {columnsState.get('Created') && <p className="text-alt-color-7 hidden md:block md:w-32">Created</p>}
      {columnsState.get('Modified') && <p className="text-alt-color-7 hidden md:block md:w-32">Modified</p>}
      <p className="text-alt-color-7 hidden md:block md:w-16">Value</p>
      {columnsState.get('Username') && <p className="text-alt-color-7 hidden md:block md:w-32">Username</p>}
      {columnsState.get('URL') && <p className="text-alt-color-7 hidden md:block md:w-45">URL</p>}
    </div>
  );
};

export const SecretsList: React.FC = () => {
  const { collectionId } = useParams<{ collectionId: string }>();
  const collectionDetails = useAtomValue(CollectionByIdState(collectionId));
  const popup = useModalState();
  const popupMessage = useModalState();
  const setSecretDetails = useSetAtom(SecretByIdState(undefined));
  const [newValues, setNewValues] = useState<Secret | undefined>(undefined);
  const navigate = useNavigate();
  const [reverseSortOrder, setReverseSortOrder] = useState(false);
  return (
    <>
      {popupMessage.isOpened && (
      <InfoMessage
        message="Successfully saved!"
        onClose={() => {
          popupMessage.close();
        }}
      />
      )}
      {popup.isOpened && (
      <Popup
        onClose={() => {
          setNewValues(undefined);
          popup.close();
        }}
        title="New Secret"
        primaryButtonAction={() => {
          if (newValues) setSecretDetails(newValues);
          setNewValues(undefined);
          popup.close();
          navigate('/congratulations');
        }}
        primaryButtonTitle="Save Secret"
      >

        <Suspense fallback={<Fallback />}>
          <SecretDetailsEdit values={newValues} collectionId={collectionId as string} onChange={setNewValues} isNew />
        </Suspense>
      </Popup>
      )}
      <SecretCollectionsPath
        collectionName={collectionDetails?.name}
        actionButtonTitle="New Secret"
        actionButtonAction={() => {
          popup.open();
        }}
      />
      <ListHead
        reverseSortOrder={reverseSortOrder}
        onSort={() => {
          setReverseSortOrder((old) => !old);
        }}
      />
      <div className="border-alt-color-6 border mx-2">
        <Suspense fallback={<Fallback />}>
          {typeof collectionId !== 'undefined' && <SecretsListSuspended reverseOrder={reverseSortOrder} collectionId={collectionId} />}
        </Suspense>
      </div>
      <div className="flex justify-center pt-10 pb-47">
        <ActionButton
          icon={MeeButtonIcon}
          title="Back to App"
          onClick={() => {
            navigate('/');
          }}
        />
      </div>
    </>
  );
};
