/* eslint-disable */

// const API_URL = 'http://localhost:8000';
const API_URL = 'https://api.codeindev.com';

/* ------------------------ Authentication CRUD URLs ------------------------ */
export default {
  APIURL: API_URL,
  /* -------------------------------- OTP Urls -------------------------------- */

  checkUserRegisterUrl: `${API_URL}/api/v1/check-user-register`,
  otpUrl: `${API_URL}/api/v1/otp`,
  verifyOtpUrl: `${API_URL}/api/v1/verify-otp`,
  profileUrl: `${API_URL}/api/v1/profile`,
  updateProfileUrl: `${API_URL}/api/v1/update-profile`,

  /* ------------------------------- Login Urls ------------------------------- */
  accountLoockupURL: `${API_URL}/api/v1/account-loockup`, // check user exist
  loginUrl: `${API_URL}/api/v1/login`,
  profileUrl: `${API_URL}/api/v1/profile`,
  logoutUrl: `${API_URL}/api/v1/logout`,
  pageAfterLoginUrl: `${API_URL}/api/v1/profile/postLoginPage`,

  /* ------------------------------ Register Urls ----------------------------- */

  emailLoockupURL: `${API_URL}/api/v1/email-loockup`,
  registerUrl: `${API_URL}/api/v1/user-signup`,
  registerMobileURL: `${API_URL}/api/v1/register-mobile`,
  confirmMobileCodeURL: `${API_URL}/api/v1/confirm-mobile-code`,
  getMobileCodeURL: `${API_URL}/api/v1/get-mobile-code`,
  registerActivationUrl: `${API_URL}/api/v1/register/activation`,

  /* --------------------------- ForgotPassword URLS -------------------------- */

  requestPasswordUrl: `${API_URL}/api/v1/password/create`,
  changePasswordUrl: `${API_URL}/api/v1/password/reset`,

  /* ------------------------------- TwoFa CRUDS ------------------------------ */

  twofaCodeDisableUrl: `${API_URL}/api/v1/profile/2fa/disable`,
  getQrCodeUrl: `${API_URL}/api/v1/twofa-qr`,
  confirmQrCodeUrl: `${API_URL}/api/v1/confirm-twofa`,
  disableQrCodeUrl: `${API_URL}/api/v1/disable-twofa`,
  getStatusQrCodeUrl: `${API_URL}/api/v1/twofa-status`,
  getUserActivityUrl: `${API_URL}/api/v1/user-activity`,

  /* ------------------------------- PersonalInfo CRUDS ------------------------------ */

  getPersonalInfoUrl: `${API_URL}/api/v1/personal-infos`,
  createPersonalInfoUrl: `${API_URL}/api/v1/personal-infos`,

  /* ------------------------------ SMS Cruds ------------------------------ */
  mobileGetVerifyCodeUrl: `${API_URL}/api/v1/get-verification-sms`,
  mobileVerifyCodeUrl: `${API_URL}/api/v1/verification-sms`,

  /* ----------------------------- settings CRUDS ----------------------------- */
  getAuthSettingsURL: `${API_URL}/api/v1/auth-settings`,

  /* --------------------------- post category CRUDS -------------------------- */

  getPostCategoryURL: `${API_URL}/api/v1/post-category`,
  getPostCategoryByIdURL: `${API_URL}/api/v1/post-category`,
  CreatePostCategoryURL: `${API_URL}/api/v1/post-category`,
  updatePostCategoryURL: `${API_URL}/api/v1/post-category`,
  deletePostCategory: `${API_URL}/api/v1/post-category`,

  /* ---------------------------- Post Status CRUD ---------------------------- */

  getAllPostStatus: `${API_URL}/api/v1/post-status`,

  /* ------------------------ post CRUDS ------------------------ */

  getAllPostsURL: `${API_URL}/api/v1/posts`,
  getPostByIdURL: `${API_URL}/api/v1/get-post-id`,
  createPostURL: `${API_URL}/api/v1/create-post`,
  updatePostURL: `${API_URL}/api/v1/post`,
  deletePostURL: `${API_URL}/api/v1/post-delete`,

  /* -------------------------- Media and Files CRUDS ------------------------- */
  uploadFileURL: `${API_URL}/api/v1/assets`,

  /* -------------------------- Post Categories CRUDS -------------------------- */

  getAllPostCategoriesURL: `${API_URL}/api/v1/post-category`,
  createPostCategoriesURL: `${API_URL}/api/v1/post-category`,
  getPostCategoryByIdURL: `${API_URL}/api/v1/post-category`,
  updatePostCategoryByIdURL: `${API_URL}/api/v1/post-category`,
  deletePostCategoriesURL: `${API_URL}/api/v1/post-category`,

  /* ------------------------- User Setting Page CRUDS ------------------------ */
  userSettingsPageCountURL: `${API_URL}/api/v1/usersetting-page-count-data`,
  getUserByIdUrl: `${API_URL}/api/v1/getuser`,
  getAllUsersURL: `${API_URL}/api/v1/users`,
  deleteUserUrl: `${API_URL}/api/v1/user`,
  createUserUrl: `${API_URL}/api/v1/create-user`,
  editUserUrl: `${API_URL}/api/v1/update-user`,

  /* ------------------------------- Roles URLS ------------------------------- */

  getAllRolesURL: `${API_URL}/api/v1/roles`,
  getRolesPermissionURL: `${API_URL}/api/v1/role-permissions`,
  getRolesPermissionByIdURL: `${API_URL}/api/v1/role-permission`,
  createRoleURL: `${API_URL}/api/v1/role`,
  deleteRoleURL: `${API_URL}/api/v1/role`,
  assignRoleToUserURL: `${API_URL}/api/v1/role-to-user`,
  revokeUserRoleURL: `${API_URL}/api/v1/role-remove-user`,
  roleGivePermissionURL: `${API_URL}/api/v1/role-giv-permission`,
  revokePermissionFromRoleURL: `${API_URL}/api/v1/role-revoke-permission`,

  /* ---------------------------- custom Routes API --------------------------- */

  dashboardDataURL: `${API_URL}/api/v1/dashboard-data`,
};
