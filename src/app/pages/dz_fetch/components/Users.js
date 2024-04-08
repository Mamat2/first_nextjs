
export default function Users({ users }) {
    return (
      <div>
        {users.length >= 1 ? (
                <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Company</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.address.city}</td>
                      <td>{user.phone}</td>
                      <td>{user.website}</td>
                      <td>{user.company.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
        ) : (
          <div>
            пользователи закончилис :( 
          </div>
        )}
      </div>
    );
  }