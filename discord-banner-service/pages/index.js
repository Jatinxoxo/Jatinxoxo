// pages/index.jsx
import DiscordCard from '../components/DiscordCard';
import { fetchStatus } from '../utils/fetchStatus';

export async function getServerSideProps() {
  const user = await fetchStatus();
  return { props: { user } };
}

export default function Home({ user }) {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Banner in the background */}
      <img
        src="/banner.jpg"
        alt="Banner"
        className="absolute top-0 left-0 w-full h-[300px] object-cover z-0"
      />

      {/* Card floating on top of banner */}
      <div className="relative z-10 flex justify-center pt-[200px]">
        <DiscordCard user={user} />
      </div>
    </div>
  );
}
