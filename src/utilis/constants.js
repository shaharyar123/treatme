import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const baseUrl =
    process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "";

export const LOCAL_STORAGE_KEYS = {
    TOKEN: "token",
    USER: "user",
    ROLE: "role",
    ACCOUNT: "account"
};

toast.configure();
export const showToast = toast;