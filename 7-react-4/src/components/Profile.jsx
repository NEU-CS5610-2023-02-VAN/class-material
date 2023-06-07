import React from "react";
import { useUser } from "../UserContext";

export default function Profile() {
  const { user } = useUser();

  return (
    <div>
      <div>
        <p>Name: {user?.name}</p>
      </div>
      <div>
        <img src={user?.avatar_url} width="70" alt="profile avatar" />
      </div>
      <div>
        <p>🏢 Company: {user?.company}</p>
      </div>
      <div>
        <p>📍 Location: {user?.location}</p>
      </div>
      <div>
        <p>🔗 Blog: {user?.blog}</p>
      </div>
      <div>
        <p>🐦 Twitter: {user?.twitter_username}</p>
      </div>
      <div>
        <p>📄 Bio: {user?.bio}</p>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Public repos</th>
              <th>Public_gists</th>
              <th>Followers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user?.public_repos}</td>
              <td>{user?.public_gists}</td>
              <td>{user?.followers}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
