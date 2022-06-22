import { useAtomValue } from 'jotai';
import React, { Suspense, useEffect } from 'react';
import { ActionButton } from 'src/components/ActionButton';
import { EditBox } from 'src/components/EditBox';
import { Fallback } from 'src/components/Fallback';
import { LinkButton } from 'src/components/LinkButton';
import { Popup } from 'src/components/Popup';
import { SecretCollectionsPath } from 'src/components/SecretCollectionsPath';
import { useModalState } from 'src/hooks/useModalState';
import { CollectionByIdState, CollectionsListState } from 'src/state/CollectionsListState';
import { dateTimeToView } from 'src/utils/dateUtils';
import { Link } from 'react-router-dom';
import FolderIcon from '../assets/folder.svg';
import ArrowDown from '../assets/arrowDown.svg';

interface ListHeadProps {
  title: string;
  onSort: () => void;
}

const ListHead: React.FC<ListHeadProps> = ({ title, onSort }) => (
  <div className="text-alt-color-4 text-base bg-secondary-content py-6 px-5 mx-2 items-center flex">
    <div className="flex gap-4 items-center md:min-w-145">
      <p>
        {title}
      </p>
      <button type="button" onClick={onSort}>
        <img alt="sort direction" src={ArrowDown} />
      </button>
    </div>
    <p className="text-alt-color-7 hidden md:block w-50 mr-56">Modified</p>
  </div>
);

interface CollectionDetailsEditProps {
  collectionId?: string;
}

const CollectionDetailsEdit: React.FC<CollectionDetailsEditProps> = ({ collectionId }) => {
  const collectionDetails = useAtomValue(CollectionByIdState(collectionId));
  useEffect(() => {
    CollectionByIdState.remove(collectionId);
  }, [collectionId]);
  return (
    <div>
      <EditBox isRequired initialValue={collectionDetails?.name || ''} title="Collection Name" />
      <EditBox initialValue={collectionDetails?.note || ''} title="Note" />
    </div>
  );
};

interface CollectionListItemProps {
  id: string;
  name: string;
  modified: Date;
}

const CollectionListItem: React.FC<CollectionListItemProps> = ({
  id, name, modified,
}) => {
  const popup = useModalState();
  return (
    <div className="text-primary border-b border-alt-color-6 pb-5 mt-6 mx-5 last:border-b-0">
      {popup.isOpened && (
      <Popup
        title="Edit Collection"
        primaryButtonAction={() => {
          // eslint-disable-next-line no-console
          console.log('update');

          popup.close();
        }}
        primaryButtonTitle="Save Collection"
      >
        <Suspense fallback={<Fallback />}>
          <CollectionDetailsEdit collectionId={id} />
        </Suspense>
      </Popup>
      )}
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center md:min-w-145">
          <img className="h-[18px]" src={FolderIcon} alt="folder" />
          <Link to={`/collection/${id}`} className="text-sm md:text-base leading-4 font-bold">{name}</Link>
        </div>
        <p className="text-base font-normal hidden md:block w-50 mr-46">
          {dateTimeToView(modified)}
        </p>
        <LinkButton onClick={() => popup.open()} title="Edit" />
      </div>
      <p className="pt-2 text-xs font-medium md:hidden">
        <span className="text-alt-color-5">Date: </span>
        {dateTimeToView(modified)}
      </p>
    </div>
  );
};

const CollectionsListSuspended: React.FC = () => {
  const collectionsList = useAtomValue(CollectionsListState(undefined));

  return (
    <>
      {collectionsList.map((collectionItem) => (
        <CollectionListItem
          key={collectionItem.id}
          id={collectionItem.id}
          name={collectionItem.name}
          modified={collectionItem.modified}
        />
      ))}
    </>
  );
};

export const CollectionsList: React.FC = () => {
  const popup = useModalState();
  const onChange = () => {
    CollectionsListState.remove(undefined);
  };
  useEffect(() => {
    onChange();
  }, []);
  return (
    <div className="bg-primary-content">
      <SecretCollectionsPath
        actionButtonTitle="New Collection"
        actionButtonAction={() => {
          popup.open();
        }}
      />
      {popup.isOpened && (
      <Popup
        title="New Collection"
        primaryButtonAction={() => {
          // eslint-disable-next-line no-console

          popup.close();
        }}
        primaryButtonTitle="Save Collection"
      >
        <CollectionDetailsEdit />
      </Popup>
      )}
      <ListHead title="Name" onSort={() => {}} />
      <div className="border-alt-color-6 border mx-2">
        <Suspense fallback={<Fallback />}>
          <CollectionsListSuspended />
        </Suspense>
      </div>
      <div className="flex justify-center pt-10 pb-47">
        <ActionButton title="Back to App" onClick={() => {}} />
      </div>
    </div>
  );
};
