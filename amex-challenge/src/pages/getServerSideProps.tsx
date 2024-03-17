import axios from "axios";

export async function getServerSideProps() {
  const res = await axios.get("https://randomuser.me/api/?results=10");
  const data = res.data.results;
  confirm;

  //
  const users = [{ name: "John Doe", email: "email@email.com" }];
  return { props: { users } };
}
