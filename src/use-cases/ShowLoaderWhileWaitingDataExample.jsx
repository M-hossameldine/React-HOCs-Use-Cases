import { useState, useEffect } from 'react';

const List = (props) => {
  const { repos } = props;

  if (!repos) return null;
  if (!repos.lenght) <p>No repos, sorry</p>;
  return (
    <ul>
      {repos.map((repo) => (
        <li key={repo.id}> {repo.full_name} </li>
      ))}
    </ul>
  );
};

const WithLoading = (Component) => {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <p>Hold on, fetching data might take some time.</p>;
  };
};

const ListWithLoading = WithLoading(List);

const ShowListWithLoading = () => {
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      fetch(`https://api.github.com/users/hacktivist123/repos`)
        .then((res) => res.json())
        .then((repos) => {
          setRepos(repos);
          setLoading(false);
        });
    }, 2000);
  }, []);

  return <ListWithLoading isLoading={loading} repos={repos} />;
};

export default ShowListWithLoading;
