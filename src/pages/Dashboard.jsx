import { useUser } from "../features/authentication/useUser";
import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import CreateGuestForm from "../features/guests/CreateGuestForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Dashboard() {
  const { user } = useUser();
  console.log(user);
  
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        {!(user?.user_metadata.role === "guest") && <DashboardFilter />}
      </Row>
      
      {!(user?.user_metadata.role === "guest") && <DashboardLayout />}
      
      {user?.user_metadata.role === "guest" && <CreateGuestForm />}
    </>
  );
}


export default Dashboard;
