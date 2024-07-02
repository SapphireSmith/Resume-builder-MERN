import toast from "react-hot-toast";

export const handleRegisterError = ({ name, email, password, confirmPassword }) => {

    if (!name || !email || !password || !confirmPassword) {
        toast.error("Please fill in all fields")
        return false
    }

    if (password !== confirmPassword) {
        toast.error("Passwords do not match")
        return false
    }

    if (password.length < 6) {
        toast.error("Password must be atleast 6 characters")
        return false
    }

    return true

}


export const handleLoginError = ({ email, password }) => {
    if (!email || !password) {
        toast.error("Please fill in all fields")
        return false
    }

    return true
}