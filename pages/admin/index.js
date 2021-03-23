import { useContext, useEffect, useState } from "react";
import UserContext from "../../Contexts/User/UserContext";
import LanguageContext from "../../Contexts/Language/LanguageContext";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Drawer from "../../components/Drawer";
import AdminMain from "../../components/AdminMain";
import OrdersList from "../../components/OrdersList";
import AddOrder from "../../components/AddOrder";
import EditOrder from "../../components/EditOrder";
import Order from "../../components/Order";
const Admin = () => {
  const { userState, Logout } = useContext(UserContext);
  const [selectedOrderId, setSelectedOrderId] = useState("");
  const [editOrder, setEditOrder] = useState({});
  const [open, setOpen] = useState(false);
  const [tap, setTap] = useState("list-all");

  const {
    languageState: { language },
    changeLang,
  } = useContext(LanguageContext);
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    if (!userState.isLoggedIn) {
      router.replace("/admin/login");
    } else {
      setPageLoading(false);
    }
  }, []);

  const renderedTap = () => {
    switch (tap) {
      case "main":
        return <AdminMain />;
      case "list-all":
        return (
          <OrdersList
            list="all"
            showOrder={() => setTap("order")}
            addOrder={() => setTap("order-form-add")}
            setOrder={setSelectedOrderId}
          />
        );
      case "list-wait":
        return (
          <OrdersList
            list="waiting"
            showOrder={() => setTap("order")}
            addOrder={() => setTap("order-form-add")}
            setOrder={setSelectedOrderId}
          />
        );
      case "list-finish":
        return (
          <OrdersList
            list="finished"
            showOrder={() => setTap("order")}
            addOrder={() => setTap("order-form-add")}
            setOrder={setSelectedOrderId}
          />
        );
      case "list-cancel":
        return (
          <OrdersList
            list="cancelled"
            addOrder={() => setTap("order-form-add")}
            showOrder={() => setTap("order")}
            setOrder={setSelectedOrderId}
          />
        );
      case "QP":
        return (
          <OrdersList
            delievryType="QP"
            addOrder={() => setTap("order-form-add")}
            showOrder={() => setTap("order")}
            setOrder={setSelectedOrderId}
          />
        );
      case "Urgent":
        return (
          <OrdersList
            delievryType="Urgent"
            addOrder={() => setTap("order-form-add")}
            showOrder={() => setTap("order")}
            setOrder={setSelectedOrderId}
          />
        );
      case "البراق":
        return (
          <OrdersList
            delievryType="البراق"
            addOrder={() => setTap("order-form-add")}
            showOrder={() => setTap("order")}
            setOrder={setSelectedOrderId}
          />
        );
      case "مترو":
        return (
          <OrdersList
            delievryType="مترو"
            addOrder={() => setTap("order-form-add")}
            showOrder={() => setTap("order")}
            setOrder={setSelectedOrderId}
          />
        );
      case "بيت":
        return (
          <OrdersList
            delievryType="بيت"
            addOrder={() => setTap("order-form-add")}
            showOrder={() => setTap("order")}
            setOrder={setSelectedOrderId}
          />
        );
      case "order-form-add": {
        return (
          <AddOrder
            showOrder={() => setTap("order")}
            setSelectedOrderId={setSelectedOrderId}
          />
        );
      }

      case "order-form-edit":
        return (
          <EditOrder
            editOrder={editOrder}
            showOrder={() => setTap("order")}
            setSelectedOrderId={setSelectedOrderId}
            setEditOrder={setEditOrder}
          />
        );
      case "order":
        return (
          <Order
            orderId={selectedOrderId}
            editOrder={(order) => {
              setEditOrder(order);
              setTap("order-form-edit");
            }}
            addOrder={() => setTap("order-form-add")}
            backToList={() => setTap("list-all")}
            setSelectedOrderId={setSelectedOrderId}
          />
        );
      default:
        return <AdminMain />;
    }
  };
  return pageLoading ? null : (
    <main>
      <Header
        openDrawer={() => setOpen(true)}
        name={userState.name}
        img={userState.name === "Omar Adel" ? "/omarAdel.jpeg" : userState.img}
      />
      <Drawer
        opened={open}
        hide={() => setOpen(false)}
        img={userState.name === "Omar Adel" ? "/omarAdel.jpeg" : userState.img}
        name={userState.name}
        setTap={setTap}
        logout={Logout}
        lang={language}
        changeLang={changeLang}
      />

      {renderedTap()}
    </main>
  );
};

export default Admin;
