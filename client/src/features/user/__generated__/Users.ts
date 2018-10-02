/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Users
// ====================================================

export interface Users_users {
  __typename: "User";
  /**
   * The user's username, should be typed in the login field.
   */
  username: string;
  email: string;
  role: string | null;
}

export interface Users {
  users: Users_users[] | null;
}
