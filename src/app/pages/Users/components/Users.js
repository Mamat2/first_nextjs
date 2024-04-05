import User from "./User";
import BackButton from "@/app/components/BackButton";
export default function Users({ users, onEdit, onDelete }) {
    return (
      <div>
        {users.length >= 1 ? (
          users.map((user) => (
            <User key={user.id} user={user} onEdit={onEdit} onDelete={onDelete} />
          ))
        ) : (
          <div>
            пользователи закончилис :( 
          </div>
        )}
      </div>
    );
  }