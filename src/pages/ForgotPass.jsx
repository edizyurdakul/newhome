import { motion } from "framer-motion";

function ForgotPassword() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      Forgot Password
    </motion.div>
  );
}

export default ForgotPassword;