import { Link } from "react-router-dom";

export default function NotificationBar() {
  return (
    <div className="w-full bg-yellow-400 text-black overflow-hidden">
      <div className="animate-marquee whitespace-nowrap py-2 text-sm font-semibold flex gap-8 cursor-pointer">

        <Link
          to="/register-seller"
          className="hover:underline hover:text-green-800"
        >
          🚜 New farmer registrations are open
        </Link>

        <Link
          to="/crop-loan"
          className="hover:underline hover:text-green-800"
        >
          💰 Apply for crop loans easily
        </Link>

        <Link
          to="/equipment-financing"
          className="hover:underline hover:text-green-800"
        >
          🛠 Equipment financing available
        </Link>

        <Link
          to="/govt-schemes"
          className="hover:underline hover:text-green-800"
        >
          🌱 Government schemes updated regularly
        </Link>

      </div>
    </div>
  );
}

