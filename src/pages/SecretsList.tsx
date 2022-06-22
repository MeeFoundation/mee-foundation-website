import { useAtomValue } from 'jotai';
import React, { Suspense, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
import ArrowDown from '../assets/arrowDown.svg';
import KeyIcon from '../assets/key.svg';
import MeeButtonIcon from '../assets/meeButton.svg';
import FilterExpandIcon from '../assets/filterExpander.svg';

interface SecretDetailsEditProps {
  secretId?: string;
}

const SecretDetailsEdit: React.FC<SecretDetailsEditProps> = ({ secretId }) => {
  const secretDetails = useAtomValue(SecretByIdState(secretId));
  useEffect(() => {
    SecretByIdState.remove(secretId);
  }, [secretId]);
  return (
    <div>
      <EditBox isRequired initialValue={secretDetails?.name || ''} title="Collection Name" />
      <EditBox initialValue={secretDetails?.note || ''} title="Note" />
      <EditBox initialValue={secretDetails?.url || ''} title="URL" />
      <EditBox initialValue={secretDetails?.secret.data || ''} title="Value" />
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
    id, name, note, created, username, url, modified,
  } = secretItem;
  const popup = useModalState();
  return (
    <div className="text-primary border-b border-alt-color-6 pb-5 mt-6 mx-5 last:border-b-0">
      {popup.isOpened && (
      <Popup
        title="Edit Secret"
        primaryButtonAction={() => {
          popup.close();
        }}
        primaryButtonTitle="Save Secret"
        secondaryButtonAction={() => {}}
        secondaryButtonTitle="Copy Value"
      >

        <Suspense fallback={<Fallback />}>
          <SecretDetailsEdit secretId={id} />
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
          <p className="pt-1 text-xs font-medium md:w-32">
            <span className="text-alt-color-5 md:hidden">Date: </span>
            {dateTimeToView(created)}
          </p>
          <p className="pt-1 text-xs font-medium md:w-32 hidden md:block">
            {dateTimeToView(modified)}
          </p>
          <p className="pt-1 font-medium leading-4 md:w-16">
            <span className="text-alt-color-5 text-xs md:hidden">Value: </span>
            <span className="text-4xs">●●●●●●●●</span>
          </p>
          <p className="pt-1 text-xs font-medium md:w-32">
            <span className="text-alt-color-5 md:hidden">Username: </span>
            {username}
          </p>
          <p className="pt-1 text-xs font-medium md:w-45">
            <span className="text-alt-color-5 md:hidden">URL: </span>
            {url}
          </p>

        </div>
        <LinkButton onClick={() => popup.open()} title="Edit" />
      </div>
    </div>
  );
};

interface SecretsListSuspendedProps {
  collectionId:string;
}

const SecretsListSuspended: React.FC<SecretsListSuspendedProps> = ({ collectionId }) => {
  const secretsList = useAtomValue(SecretsListState(collectionId));
  return (
    <div>
      {secretsList?.map((secret) => (
        <SecretListItem key={secret.id} secretItem={secret} />
      ))}
    </div>
  );
};

interface ListHeadProps {
  onSort: () => void;
}

const ListHead: React.FC<ListHeadProps> = ({ onSort }) => (
  <div className="text-alt-color-4 text-base bg-secondary-content py-6 px-5 mx-2 items-center flex">
    <div className="flex gap-4 items-center md:w-46 md:mr-21">
      <button type="button" onClick={() => {}}>
        <img className="bg-primary-content" alt="columns select" src={FilterExpandIcon} />
      </button>
      <p>
        Name
      </p>
      <button type="button" onClick={onSort}>
        <img alt="sort direction" src={ArrowDown} />
      </button>
    </div>
    <p className="text-alt-color-7 hidden md:block md:w-32">Created</p>
    <p className="text-alt-color-7 hidden md:block md:w-32">Modified</p>
    <p className="text-alt-color-7 hidden md:block md:w-16">Value</p>
    <p className="text-alt-color-7 hidden md:block md:w-32">Username</p>
    <p className="text-alt-color-7 hidden md:block md:w-45">URL</p>
  </div>
);

export const SecretsList: React.FC = () => {
  const { collectionId } = useParams<{ collectionId: string }>();
  const collectionDetails = useAtomValue(CollectionByIdState(collectionId));
  const popup = useModalState();
  // eslint-disable-next-line no-console
  console.log(collectionDetails);
  return (
    <>
      <SecretCollectionsPath
        collectionName={collectionDetails?.name}
        actionButtonTitle="New Secret"
        actionButtonAction={() => {
          popup.open();
        }}
      />
      <ListHead onSort={() => {}} />
      <div className="border-alt-color-6 border mx-2">
        <Suspense fallback={<Fallback />}>
          {typeof collectionId !== 'undefined' && <SecretsListSuspended collectionId={collectionId} />}
        </Suspense>
      </div>
      <div className="flex justify-center pt-10 pb-47">
        <ActionButton icon={MeeButtonIcon} title="Back to App" onClick={() => {}} />
      </div>
    </>
  );
};
