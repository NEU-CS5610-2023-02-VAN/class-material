import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { GITHUB_API_URL } from "../constants";
import { useUser } from "../UserContext";
import "../style/repositoryDetail.css";

export default function RepositoryDetail() {
  const [repository, setRepository] = useState();
  const params = useParams();
  const { user } = useUser();

  useEffect(() => {
    async function getRepositoryDetails() {
      const res = await fetch(
        `${GITHUB_API_URL}/repos/${user.login}/${params.repositoryId}`
      );
      const data = await res.json();
      if (data) {
        setRepository(data);
      }
    }

    if (params.repositoryId && user.login) {
      getRepositoryDetails();
    }
  }, [user, params]);

  return (
    <div className="repositoryDetail">
      <Link to="/app/repositories"> ⬅️ Back</Link>
      <h2>{params.repositoryId}</h2>
      <div>
        <a href={repository?.html_url} target="_blank" rel="noreferrer">
          🏠 Repository Url
        </a>
      </div>
      <div>
        <p>💻 Language: {repository?.language}</p>
      </div>
      <div>
        <p>🍴 Forks count: {repository?.forks_count}</p>
      </div>
      <div>
        <p>🐛 Open issues count: {repository?.open_issues_count}</p>
      </div>
      <div>
        <p>✨ Subscribers count: {repository?.subscribers_count}</p>
      </div>
      <div>
        <p>🔥 Default branch: {repository?.default_branch}</p>
      </div>
    </div>
  );
}
