import { useAtomValue, useAtom, useSetAtom } from 'jotai';
import React, {
  Suspense, useEffect, useMemo, useState,
} from 'react';
import { ActionButton } from 'src/components/ActionButton';
import { EditBox } from 'src/components/EditBox';
import { Fallback } from 'src/components/Fallback';
import { LinkButton } from 'src/components/LinkButton';
import { Popup } from 'src/components/Popup';
import { SecretCollectionsPath } from 'src/components/SecretCollectionsPath';
import { useModalState } from 'src/hooks/useModalState';
import { CollectionByIdState, CollectionsListState } from 'src/state/CollectionsListState';
import { dateTimeToView } from 'src/utils/dateUtils';
import { Link, useNavigate } from 'react-router-dom';
import { InfoMessage } from 'src/components/InfoMessage';
import { Collection, NewCollection } from 'src/model/Secret';
import clsx from 'clsx';
import { FieldError, useForm, UseFormRegister } from 'react-hook-form';
import FolderIcon from '../assets/folder.svg';
import ArrowDown from '../assets/arrowDown.svg';
import MeeButtonIcon from '../assets/meeButton.svg';

interface ListHeadProps {
  title: string;
  onSort: () => void;
  reverseSortOrder: boolean;
}

const ListHead: React.FC<ListHeadProps> = ({ title, onSort, reverseSortOrder }) => (
  <div className="text-alt-color-4 text-base bg-secondary-content py-6 px-5 mx-2 items-center flex">
    <div className="flex gap-4 items-center md:min-w-145">
      <p>
        {title}
      </p>
      <button type="button" onClick={onSort}>
        <img className={clsx(reverseSortOrder && 'rotate-180')} alt="sort direction" src={ArrowDown} />
      </button>
    </div>
    <p className="text-alt-color-7 hidden md:block w-50 mr-56">Modified</p>
  </div>
);

interface CollectionDetailsEditProps {
  collectionId?: string;
  register: UseFormRegister<Collection>;
  errors: { name?: FieldError | undefined, note?: FieldError | undefined };
}

const CollectionDetailsEdit: React.FC<CollectionDetailsEditProps> = ({
  collectionId, register, errors,
}) => {
  useEffect(() => {
    CollectionByIdState.remove(collectionId);
  }, [collectionId]);
  return (
    <div>
      <EditBox error={errors.name?.message} title="Collection Name" register={register('name', { required: 'Collection Name is required' })} isRequired />
      <EditBox error={errors.note?.message} title="Note" register={register('note')} />
    </div>
  );
};

interface CollectionListItemProps {
  id?: string;
  name: string;
  modified?: Date;
}

const CollectionListItem: React.FC<CollectionListItemProps> = ({
  id, name, modified,
}) => {
  const popup = useModalState();
  const popupMessage = useModalState();
  const [collectionDetails, setCollectionDetails] = useAtom(CollectionByIdState(id));

  const defaultValues = {
    id: new Date().getTime().toString(), created: new Date(), modified: new Date(), name: '', note: '',
  };
  const {
    register, getValues, trigger, formState, reset,
  } = useForm<NewCollection>({
    defaultValues: collectionDetails || defaultValues,
    reValidateMode: 'onChange',
  });
  const { errors } = formState;

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
          reset();
          popup.close();
        }}
        title="Edit Collection"
        primaryButtonAction={async () => {
          const isOk = await trigger();
          if (isOk) {
            setCollectionDetails(getValues());
            popupMessage.open();
            popup.close();
          }
        }}
        primaryButtonTitle="Save Collection"
      >
        <Suspense fallback={<Fallback />}>
          <CollectionDetailsEdit
            errors={errors}
            register={register}
            collectionId={id}
          />
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

interface CollectionsListSuspendedProps {
  reverseOrder: boolean;
}

const CollectionsListSuspended: React.FC<CollectionsListSuspendedProps> = ({ reverseOrder }) => {
  const collectionsList = useAtomValue(CollectionsListState);
  const collectionListSorted: Collection[] = useMemo(() => collectionsList.sort((a, b) => (
    a.name.localeCompare(b.name) * (reverseOrder ? -1 : 1))), [collectionsList, reverseOrder]);

  return (
    <>
      {collectionListSorted.map((collectionItem) => (
        <CollectionListItem
          key={collectionItem.id}
          id={collectionItem.id}
          name={collectionItem.name}
          modified={collectionItem?.modified}
        />
      ))}
    </>
  );
};

export const CollectionsList: React.FC = () => {
  const popup = useModalState();
  const popupMessage = useModalState();

  const setCollectionDetails = useSetAtom(CollectionByIdState(undefined));
  const navigate = useNavigate();
  const [reverseSortOrder, setReverseSortOrder] = useState(false);
  const defaultValues = {
    id: new Date().getTime().toString(), created: new Date(), modified: new Date(), name: '', note: '',
  };
  const {
    register, getValues, reset, trigger, formState,
  } = useForm<NewCollection>({ defaultValues, reValidateMode: 'onChange', mode: 'onChange' });

  const { errors } = formState;

  return (
    <div className="bg-primary-content">
      <SecretCollectionsPath
        actionButtonTitle="New Collection"
        actionButtonAction={() => {
          popup.open();
        }}
      />
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
        title="New Collection"
        primaryButtonAction={async () => {
          const isOk = await trigger();
          if (isOk) {
            setCollectionDetails(getValues());
            reset();
            popupMessage.open();
            popup.close();
          }
        }}
        primaryButtonTitle="Save Collection"
      >
        <CollectionDetailsEdit errors={errors} register={register} />
      </Popup>
      )}
      <ListHead
        title="Name"
        reverseSortOrder={reverseSortOrder}
        onSort={() => {
          setReverseSortOrder((old) => !old);
        }}
      />
      <div className="border-alt-color-6 border mx-2">
        <Suspense fallback={<Fallback />}>
          <CollectionsListSuspended reverseOrder={reverseSortOrder} />
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
    </div>
  );
};
