import {
  atom, useAtom, useAtomValue, useSetAtom,
} from 'jotai';
import React, {
  Suspense, useEffect, useMemo, useRef, useState,
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
import { useClickOutside } from 'src/hooks/useClickOutside';
import { FieldError, useForm, UseFormRegister } from 'react-hook-form';
import ArrowDown from '../assets/arrowDown.svg';
import KeyIcon from '../assets/key.svg';
import MeeButtonIcon from '../assets/meeButton.svg';
import FilterExpandIcon from '../assets/filterExpander.svg';

const ColumnsState = atom(new Map([
  ['Created', true], ['Modified', false], ['Username', false], ['URL', false], ['Value', false],
]));

const ColumnsSelectPopup: React.FC = () => {
  const [columnsState, setColumnsState] = useAtom(ColumnsState);

  return (
    <div className="absolute top-6 p-3 bg-primary-content pr-20 shadow-lg">
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
  secretId?: string;
  isNew?: boolean;
  register: UseFormRegister<Secret>;
  errors: {
    name?: FieldError | undefined,
    note?: FieldError | undefined,
    url?: FieldError | undefined,
    secret?: { type?: FieldError | undefined, data?:FieldError | undefined }
  };
}

const SecretDetailsEdit: React.FC<SecretDetailsEditProps> = ({
  secretId, isNew, register, errors,
}) => {
  useEffect(() => {
    SecretByIdState.remove(secretId);
  }, [secretId]);
  return (
    <div>
      <EditBox error={errors.name?.message} register={register('name', { required: 'Secret Name is required' })} isRequired title="Secret Name" />
      <EditBox error={errors.note?.message} register={register('note')} title="Note" />
      <EditBox error={errors.url?.message} register={register('url')} title="URL" />
      <SecretBox
        error={errors.secret?.data?.message}
        register={register('secret.data')}
        isHiddenByDefault={!isNew}
        title="Value" // {`Value${isNew ? '' : ' (read-only)'}`}
        isReadOnly={false} // {!isNew}
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
  };
  const {
    register, getValues, trigger, formState, reset,
  } = useForm<Secret>({
    defaultValues: secretDetails || defaultValues,
    reValidateMode: 'onChange',
  });
  const { errors } = formState;
  return (
    <div className="text-primary border-b border-alt-color-6 pb-5 mt-6 last:border-b-0 mx-5 overflow-visible md:inline-block md:min-w-241">
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
          reset();
          popup.close();
        }}
        title="Edit Secret"
        primaryButtonAction={async () => {
          const isOk = await trigger();
          if (isOk) {
            setSecretDetails(getValues());
            popupMessage.open();
            popup.close();
          }
        }}
        primaryButtonTitle="Save Secret"
        secondaryButtonAction={() => {
          navigator.clipboard.writeText(secret.data);
        }}
        secondaryButtonTitle="Copy Value"
      >

        <Suspense fallback={<Fallback />}>
          <SecretDetailsEdit errors={errors} register={register} secretId={id} />
        </Suspense>
      </Popup>
      )}
      <div className="flex justify-between items-start md:items-center">
        <img className="h-[18px] mr-3 pt-1 md:hidden" src={KeyIcon} alt="key" />
        <div className="flex flex-col justify-between md:justify-start items-start md:items-center md:flex-row flex-1 md:gap-5">
          <div className="flex gap-3 md:gap-0 items-center flex-1 md:min-w-62 md:max-w-145">
            <img className="h-[18px] mr-3 mt-1 hidden md:block" src={KeyIcon} alt="key" />
            <div className="md:w-full">
              <p className="text-sm md:text-base leading-4 md:min-w-39 font-bold">{name}</p>
              <p className={clsx('text-xs md:text-sm leading-4 md:min-w-39 pt-1', note === '' && 'hidden')}>{note}</p>
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
          {columnsState.get('Value') && (
          <p className="pt-1 font-medium leading-4 md:w-25">
            <span className="text-alt-color-5 text-xs md:hidden">Value: </span>
            <span className="text-4xs">●●●●●●●●</span>
          </p>
          )}
          {columnsState.get('Username') && (
          <p className="pt-1 text-xs font-medium md:w-32 overflow-hidden overflow-ellipsis">
            <span className="text-alt-color-5 md:hidden">Username: </span>
            {username}
          </p>
          )}
          {columnsState.get('URL') && (
          <p className="pt-1 text-xs font-medium md:w-45 overflow-hidden overflow-ellipsis">
            <span className="text-alt-color-5 md:hidden">URL: </span>
            {url}
          </p>
          )}

        </div>
        <div className="">
          <LinkButton onClick={() => popup.open()} title="Edit" />
        </div>
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
    <div className="">
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
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => {
    setShowColumnsSelectPopup(false);
  });
  return (
    <div className="md:inline-block md:min-w-full">
      <div className="text-alt-color-4 text-base bg-secondary-content py-6 pl-5 pr-12 items-center flex md:gap-5">
        <div className="flex gap-4 items-center md:min-w-62  md:max-w-145 md:flex-1">
          <div ref={ref} className="h-6 relative">
            <button
              type="button"
              onClick={() => {
                setShowColumnsSelectPopup((old) => !old);
              }}
              className=""
            >
              <img className="bg-primary-content" alt="columns select" src={FilterExpandIcon} />
            </button>
            {showColumnsSelectPopup && <ColumnsSelectPopup />}
          </div>

          <p>
            Name
          </p>
          <button type="button" onClick={onSort}>
            <img className={clsx(reverseSortOrder && 'rotate-180')} alt="sort direction" src={ArrowDown} />
          </button>

        </div>
        <div className="flex gap-5">
          {columnsState.get('Created') && <p className="text-alt-color-7 hidden md:block md:w-32">Created</p>}
          {columnsState.get('Modified') && <p className="text-alt-color-7 hidden md:block md:w-32">Modified</p>}
          {columnsState.get('Value') && <p className="text-alt-color-7 hidden md:block md:w-25">Value</p>}
          {columnsState.get('Username') && <p className="text-alt-color-7 hidden md:block md:w-32">Username</p>}
          {columnsState.get('URL') && <p className="text-alt-color-7 hidden md:block md:w-45">URL</p>}
        </div>
      </div>
    </div>
  );
};

export const SecretsList: React.FC = () => {
  const { collectionId } = useParams<{ collectionId: string }>();
  const collectionDetails = useAtomValue(CollectionByIdState(collectionId));
  const popup = useModalState();
  const popupMessage = useModalState();
  const setSecretDetails = useSetAtom(SecretByIdState(undefined));
  const navigate = useNavigate();
  const [reverseSortOrder, setReverseSortOrder] = useState(false);
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
  };
  const {
    register, getValues, trigger, formState, reset,
  } = useForm<Secret>({
    defaultValues,
    reValidateMode: 'onChange',
  });
  const { errors } = formState;
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
          reset();
          popup.close();
        }}
        title="New Secret"
        primaryButtonAction={async () => {
          const isOk = await trigger();
          if (isOk) {
            setSecretDetails(getValues());
            reset();
            popup.close();
            navigate('/congratulations');
          }
        }}
        primaryButtonTitle="Save Secret"
      >

        <Suspense fallback={<Fallback />}>
          <SecretDetailsEdit isNew register={register} errors={errors} />
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
      <div className="border-alt-color-6 border mx-2 overflow-x-auto scroll-m-2">
        <ListHead
          reverseSortOrder={reverseSortOrder}
          onSort={() => {
            setReverseSortOrder((old) => !old);
          }}
        />
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
