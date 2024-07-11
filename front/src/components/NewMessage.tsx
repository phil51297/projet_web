import { useGetUsersQuery } from "../gql/file";

const UsersList = () => {
  const { data, loading, error } = useGetUsersQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul>
      {data?.users.map(({ id, username }) => (
        <li key={id}>{username}</li>
      ))}
    </ul>
  );
};

export default UsersList;
