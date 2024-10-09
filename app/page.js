import Link from "next/link";

const Home = () => (
  <div>
    <h1>welcome to Assignments</h1>
    <ul>
      <li>
        <Link href="/week-2">Go to Week-2 Assignment</Link>
      </li>
      <li>
        <Link href="/week-3">Go to Week-3 Assignment</Link>
      </li>
      <li>
        <Link href="/week-4">Go to Week-4 Assignment</Link>
      </li>
    </ul>
  </div>
);

export default Home;
