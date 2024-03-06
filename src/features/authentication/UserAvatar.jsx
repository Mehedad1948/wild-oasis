import { useUser } from './useUser';

function UserAvatar() {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;
  return (
    <div className="flex items-center gap-2 text-slate-700">
      <img
        className="block aspect-square w-6 rounded-full object-cover"
        src={avatar || 'default-user.jpg'}
        alt={`Avatar of ${fullName}`}
      />
      <span>{fullName}</span>
    </div>
  );
}

export default UserAvatar;
