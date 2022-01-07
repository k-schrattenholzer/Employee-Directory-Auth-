import { useUser } from "../../context/UserContext.jsx"

export default function Profile() {
  const { user } = useUser();
  console.log(user.aud, user.email);
  return (
    <div>
      your perfect profile
    </div>
  )
}
