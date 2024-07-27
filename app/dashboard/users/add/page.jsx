import styles from "app/ui/dashboard/users/addUser/addUser.module.css";

export default function addUserPage() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder="Name" name="name" required />
        <input type="email" placeholder="Email" name="email" required />
        <input type="password" placeholder="Password" name="password" required />
        <input type="phone" placeholder="Phone" name="password" required />
        <select name="isAdmin" id="isAdmin">
          <option value="general">Is admin?</option>
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select>
        <select name="isActive" id="isActive">
          <option value="general">Is active?</option>
          <option value="yes">yes</option>
          <option value="no">no</option>
        </select>
        <input type="address" placeholder="Address" name="address" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

// <th>Name</th>
//               <th>Email</th>
//               <th>Created At</th>
//               <th>Role</th>
//               <th>Status</th>
//               <th>Action</th>
