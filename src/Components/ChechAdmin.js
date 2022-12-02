import { useEffect, useState } from "react";

const CheckAdmin = (email) => {
  const [adminState, setAdminState] = useState(null);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://assignment-12-backend-rejwan-ahamed.vercel.app/adminState/${email}`
    )
      .then((res) => res.json())
      .then((result) => {
        setAdminState(result);
        setAdminLoading(false);
      });
  }, [email]);
  return [adminState, adminLoading];
};

export default CheckAdmin;
