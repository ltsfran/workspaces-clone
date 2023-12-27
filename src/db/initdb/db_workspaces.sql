CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

INSERT INTO users (username, email, password) VALUES ('admin', 'admin@example.com', 'password123');

CREATE TABLE workspaces (
  workspace_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  content TEXT,
  admin_id INT REFERENCES users(user_id)
);

INSERT INTO workspaces (title, description, content, admin_id) VALUES ('Sample Workspace', 'This is a sample workspace.', 'Sample content in markdown', 1);
