function Users({ blog }) {
  return (
    <div>
      {blog.map((blog) => (
        <div key={blog.id}>
          <h3>Name: {blog.name}</h3>
          <p>Username: {blog.username}</p>
          <p>email: {blog.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;
