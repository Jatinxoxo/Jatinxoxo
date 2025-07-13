import React from 'react';

export default function DiscordCard({ user }) {
  const avatarUrl = `https://cdn.discordapp.com/avatars/${user.discord_user.id}/${user.discord_user.avatar}.png`;
  const statusColor = {
    online: 'bg-green-500',
    idle: 'bg-yellow-400',
    dnd: 'bg-red-500',
    offline: 'bg-gray-500',
  }[user.discord_status] || 'bg-gray-500';

  const activity = user.activities?.find((act) => act.type === 0);

  return (
    <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-2xl w-[400px] p-6 flex flex-col items-center gap-4">
      {/* Avatar & Name */}
      <div className="relative">
        <img
          src={avatarUrl}
          alt="Avatar"
          className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
        />
        <span
          className={`absolute bottom-2 right-2 w-4 h-4 rounded-full border-2 border-black ${statusColor}`}
          title={user.discord_status}
        />
      </div>

      <div className="text-center">
        <h1 className="text-xl font-semibold">{user.discord_user.username}#{user.discord_user.discriminator}</h1>
        <p className="text-sm text-gray-400 capitalize">Status: {user.discord_status}</p>
      </div>

      {/* Activity */}
      <div className="text-sm text-gray-300 text-center">
        {activity ? (
          <>
            <p className="text-gray-200">🎮 {activity.name}</p>
            {activity.details && <p className="text-gray-400">{activity.details}</p>}
            {activity.state && <p className="text-gray-500 italic">{activity.state}</p>}
          </>
        ) : (
          <p className="italic">Not playing anything</p>
        )}
      </div>
    </div>
  );
}
