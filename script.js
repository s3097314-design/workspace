// =====================
// CONFIG
// =====================
const HR_SECRET_CODE = "HRCODE2024";

// =====================
// TRANSLATIONS
// =====================
const translations = {
  en: {
    nav_employee: "Employee Panel",
    nav_hr: "HR Dashboard",
    panel_title: "Employee Panel",
    panel_subtitle: "Your daily workspace — mood, vacation, and more.",
    mood_title: "Daily Mood",
    mood_desc: "How are you feeling today?",
    mood_sad: "Sad",
    mood_neutral: "Neutral",
    mood_happy: "Happy",
    mood_submit: "Submit Mood",
    vacation_title: "Vacation Request",
    vacation_desc: "Submit a leave request to HR.",
    vacation_reason_placeholder: "Reason for vacation...",
    vacation_submit: "Send Request",
    complaint_title: "Anonymous Complaint",
    complaint_desc:
      "Submit feedback anonymously. Your identity is never stored.",
    complaint_placeholder: "Write your complaint or suggestion...",
    complaint_submit: "Submit Anonymously",
    chat_title: "Message HR",
    chat_placeholder: "Type your message...",
    chat_send: "Send",
    hr_title: "HR Dashboard",
    hr_subtitle: "Monitor team wellbeing and incoming requests.",
    burnout_warning:
      "Burnout Risk Detected! Average mood is critically low. Take action now.",
    stat_avg_mood: "Average Mood",
    stat_score: "Mood Score",
    stat_vacations: "Vacation Requests",
    stat_complaints: "Anonymous Reports",
    hr_vacation_list: "Vacation Requests",
    hr_complaints_list: "Anonymous Complaints",
    hr_chat_list: "Employee Messages",
    hr_mood_log: "Mood Log",
    clear_all: "Clear All Data",
    empty: "No data yet.",
    feedback_mood: "Mood submitted! Thank you.",
    feedback_vacation: "Vacation request sent!",
    feedback_complaint: "Complaint submitted anonymously.",
    err_select_mood: "Please select a mood first.",
    err_fill_fields: "Please fill in all required fields.",
    err_complaint_empty: "Please write something before submitting.",
    login_title: "Welcome Back",
    login_sub: "Sign in to your account",
    login_id_label: "Email or Phone Number",
    login_id_placeholder: "Email or phone number",
    login_pass_label: "Password",
    login_pass_placeholder: "Password",
    remember_me: "Remember me",
    login_btn: "Sign In",
    no_account: "Don't have an account?",
    go_signup: "Create one",
    signup_title: "Create Account",
    signup_sub: "Join your team on WorkPulse",
    signup_name_label: "Full Name",
    signup_name_placeholder: "Your full name",
    signup_id_label: "Email or Phone Number",
    signup_id_placeholder: "Email or phone number",
    signup_pass_label: "Password",
    signup_pass_placeholder: "Create a password",
    signup_role_label: "Account Type",
    role_employee: "Employee",
    role_hr: "HR Manager",
    hr_code_label: "HR Access Code",
    hr_code_placeholder: "Enter HR access code",
    hr_code_hint: "Ask your HR administrator for the access code.",
    signup_btn: "Create Account",
    have_account: "Already have an account?",
    go_login: "Sign in",
    logout: "Logout",
    err_login_invalid: "Incorrect email/phone or password.",
    err_signup_exists: "This email/phone is already registered.",
    err_signup_empty: "Please fill in all fields.",
    err_hr_code: "Invalid HR access code.",
    err_pass_short: "Password must be at least 6 characters.",
    forgot_password: "Forgot password?",
    forgot_title: "Reset Password",
    forgot_sub: "Enter your email/phone and choose a new password.",
    forgot_new_pass_label: "New Password",
    forgot_new_pass_placeholder: "New password (min 6 chars)",
    forgot_btn: "Reset Password",
    back_to_login: "← Back to login",
    err_account_not_found: "No account found with that email/phone.",
    forgot_success:
      "Password reset! You can now log in with your new password.",
  },
  fr: {
    nav_employee: "Espace Employé",
    nav_hr: "Tableau RH",
    panel_title: "Espace Employé",
    panel_subtitle: "Votre espace quotidien — humeur, congés, et plus.",
    mood_title: "Humeur du Jour",
    mood_desc: "Comment vous sentez-vous aujourd'hui ?",
    mood_sad: "Triste",
    mood_neutral: "Neutre",
    mood_happy: "Heureux",
    mood_submit: "Envoyer l'Humeur",
    vacation_title: "Demande de Congé",
    vacation_desc: "Envoyez une demande de congé aux RH.",
    vacation_reason_placeholder: "Raison du congé...",
    vacation_submit: "Envoyer la Demande",
    complaint_title: "Plainte Anonyme",
    complaint_desc: "Soumettez vos commentaires anonymement.",
    complaint_placeholder: "Écrivez votre plainte ou suggestion...",
    complaint_submit: "Soumettre Anonymement",
    chat_title: "Message aux RH",
    chat_placeholder: "Tapez votre message...",
    chat_send: "Envoyer",
    hr_title: "Tableau de Bord RH",
    hr_subtitle: "Surveillez le bien-être de l'équipe.",
    burnout_warning:
      "Risque d'épuisement détecté ! L'humeur moyenne est critique.",
    stat_avg_mood: "Humeur Moyenne",
    stat_score: "Score d'Humeur",
    stat_vacations: "Demandes de Congé",
    stat_complaints: "Rapports Anonymes",
    hr_vacation_list: "Demandes de Congé",
    hr_complaints_list: "Plaintes Anonymes",
    hr_chat_list: "Messages Employés",
    hr_mood_log: "Journal des Humeurs",
    clear_all: "Effacer Toutes les Données",
    empty: "Aucune donnée.",
    feedback_mood: "Humeur enregistrée ! Merci.",
    feedback_vacation: "Demande de congé envoyée !",
    feedback_complaint: "Plainte soumise anonymement.",
    err_select_mood: "Veuillez sélectionner une humeur.",
    err_fill_fields: "Veuillez remplir tous les champs requis.",
    err_complaint_empty: "Veuillez écrire quelque chose.",
    login_title: "Bon Retour",
    login_sub: "Connectez-vous à votre compte",
    login_id_label: "Email ou Téléphone",
    login_id_placeholder: "Email ou téléphone",
    login_pass_label: "Mot de Passe",
    login_pass_placeholder: "Mot de passe",
    remember_me: "Se souvenir de moi",
    login_btn: "Se Connecter",
    no_account: "Pas de compte ?",
    go_signup: "Créer un compte",
    signup_title: "Créer un Compte",
    signup_sub: "Rejoignez votre équipe sur WorkPulse",
    signup_name_label: "Nom Complet",
    signup_name_placeholder: "Votre nom complet",
    signup_id_label: "Email ou Téléphone",
    signup_id_placeholder: "Email ou téléphone",
    signup_pass_label: "Mot de Passe",
    signup_pass_placeholder: "Créer un mot de passe",
    signup_role_label: "Type de Compte",
    role_employee: "Employé",
    role_hr: "Responsable RH",
    hr_code_label: "Code d'Accès RH",
    hr_code_placeholder: "Code d'accès RH",
    hr_code_hint: "Demandez le code d'accès à votre administrateur RH.",
    signup_btn: "Créer le Compte",
    have_account: "Déjà un compte ?",
    go_login: "Se connecter",
    logout: "Déconnexion",
    err_login_invalid: "Email/téléphone ou mot de passe incorrect.",
    err_signup_exists: "Cet email/téléphone est déjà enregistré.",
    err_signup_empty: "Veuillez remplir tous les champs.",
    err_hr_code: "Code d'accès RH invalide.",
    err_pass_short: "Le mot de passe doit contenir au moins 6 caractères.",
    forgot_password: "Mot de passe oublié ?",
    forgot_title: "Réinitialiser le mot de passe",
    forgot_sub:
      "Entrez votre email/téléphone et choisissez un nouveau mot de passe.",
    forgot_new_pass_label: "Nouveau Mot de Passe",
    forgot_new_pass_placeholder: "Nouveau mot de passe (min 6 caractères)",
    forgot_btn: "Réinitialiser",
    back_to_login: "← Retour à la connexion",
    err_account_not_found: "Aucun compte trouvé avec cet email/téléphone.",
    forgot_success:
      "Mot de passe réinitialisé ! Vous pouvez maintenant vous connecter.",
  },
  ar: {
    nav_employee: "لوحة الموظف",
    nav_hr: "لوحة الموارد البشرية",
    panel_title: "لوحة الموظف",
    panel_subtitle: "مساحتك اليومية — المزاج، الإجازات، والمزيد.",
    mood_title: "مزاج اليوم",
    mood_desc: "كيف حالك اليوم؟",
    mood_sad: "حزين",
    mood_neutral: "محايد",
    mood_happy: "سعيد",
    mood_submit: "إرسال المزاج",
    vacation_title: "طلب إجازة",
    vacation_desc: "أرسل طلب إجازة إلى الموارد البشرية.",
    vacation_reason_placeholder: "سبب الإجازة...",
    vacation_submit: "إرسال الطلب",
    complaint_title: "شكوى مجهولة",
    complaint_desc: "أرسل ملاحظاتك بشكل مجهول.",
    complaint_placeholder: "اكتب شكواك أو اقتراحك...",
    complaint_submit: "إرسال بشكل مجهول",
    chat_title: "مراسلة الموارد البشرية",
    chat_placeholder: "اكتب رسالتك...",
    chat_send: "إرسال",
    hr_title: "لوحة الموارد البشرية",
    hr_subtitle: "راقب رفاهية الفريق والطلبات الواردة.",
    burnout_warning: "تحذير: خطر الإرهاق! متوسط المزاج منخفض جداً.",
    stat_avg_mood: "متوسط المزاج",
    stat_score: "درجة المزاج",
    stat_vacations: "طلبات الإجازة",
    stat_complaints: "التقارير المجهولة",
    hr_vacation_list: "طلبات الإجازة",
    hr_complaints_list: "الشكاوى المجهولة",
    hr_chat_list: "رسائل الموظفين",
    hr_mood_log: "سجل المزاج",
    clear_all: "مسح جميع البيانات",
    empty: "لا توجد بيانات بعد.",
    feedback_mood: "تم إرسال مزاجك! شكراً.",
    feedback_vacation: "تم إرسال طلب الإجازة!",
    feedback_complaint: "تم إرسال الشكوى بشكل مجهول.",
    err_select_mood: "الرجاء اختيار مزاج أولاً.",
    err_fill_fields: "الرجاء ملء جميع الحقول المطلوبة.",
    err_complaint_empty: "الرجاء كتابة شيء قبل الإرسال.",
    login_title: "مرحباً بعودتك",
    login_sub: "سجّل الدخول إلى حسابك",
    login_id_label: "البريد الإلكتروني أو رقم الهاتف",
    login_id_placeholder: "البريد أو الهاتف",
    login_pass_label: "كلمة المرور",
    login_pass_placeholder: "كلمة المرور",
    remember_me: "تذكرني",
    login_btn: "تسجيل الدخول",
    no_account: "ليس لديك حساب؟",
    go_signup: "أنشئ حساباً",
    signup_title: "إنشاء حساب",
    signup_sub: "انضم إلى فريقك على WorkPulse",
    signup_name_label: "الاسم الكامل",
    signup_name_placeholder: "اسمك الكامل",
    signup_id_label: "البريد الإلكتروني أو الهاتف",
    signup_id_placeholder: "البريد أو الهاتف",
    signup_pass_label: "كلمة المرور",
    signup_pass_placeholder: "أنشئ كلمة مرور",
    signup_role_label: "نوع الحساب",
    role_employee: "موظف",
    role_hr: "مدير الموارد البشرية",
    hr_code_label: "رمز الوصول",
    hr_code_placeholder: "أدخل رمز الوصول",
    hr_code_hint: "اطلب رمز الوصول من مسؤول الموارد البشرية.",
    signup_btn: "إنشاء الحساب",
    have_account: "لديك حساب؟",
    go_login: "سجّل الدخول",
    logout: "تسجيل الخروج",
    err_login_invalid: "البريد/الهاتف أو كلمة المرور غير صحيحة.",
    err_signup_exists: "هذا البريد/الهاتف مسجّل مسبقاً.",
    err_signup_empty: "الرجاء ملء جميع الحقول.",
    err_hr_code: "رمز الوصول غير صحيح.",
    err_pass_short: "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل.",
    forgot_password: "نسيت كلمة المرور؟",
    forgot_title: "إعادة تعيين كلمة المرور",
    forgot_sub: "أدخل بريدك/هاتفك واختر كلمة مرور جديدة.",
    forgot_new_pass_label: "كلمة المرور الجديدة",
    forgot_new_pass_placeholder: "كلمة مرور جديدة (6 أحرف على الأقل)",
    forgot_btn: "إعادة التعيين",
    back_to_login: "← العودة إلى تسجيل الدخول",
    err_account_not_found: "لا يوجد حساب بهذا البريد/الهاتف.",
    forgot_success: "تم إعادة تعيين كلمة المرور! يمكنك الآن تسجيل الدخول.",
  },
};

// =====================
// STATE
// =====================
let currentLang = "en";
let selectedMood = null;
let currentUser = null;
let activeHrThread = null;
const MOOD_SCORES = { sad: 1, neutral: 2, happy: 3 };
const MOOD_EMOJIS = { sad: "😢", neutral: "😐", happy: "😄" };

// =====================
// THEME
// =====================
function toggleTheme() {
  const next =
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "light"
      : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("wp_theme", next);
  updateThemeIcons(next);
}
function updateThemeIcons(theme) {
  document
    .querySelectorAll(".theme-toggle")
    .forEach((btn) => (btn.textContent = theme === "dark" ? "☀️" : "🌙"));
}
function loadTheme() {
  const saved = localStorage.getItem("wp_theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);
  updateThemeIcons(saved);
}

// =====================
// LANGUAGE
// =====================
function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || key;
}
function setLang(lang) {
  currentLang = lang;
  const isRTL = lang === "ar";
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key] !== undefined)
      el.textContent = translations[lang][key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key] !== undefined)
      el.placeholder = translations[lang][key];
  });
}

// =====================
// AUTH PANELS
// =====================
function showAuthPanel(panel) {
  document
    .getElementById("login-panel")
    .classList.toggle("hidden", panel !== "login");
  document
    .getElementById("signup-panel")
    .classList.toggle("hidden", panel !== "signup");
  const forgotEl = document.getElementById("forgot-panel");
  if (forgotEl) forgotEl.classList.toggle("hidden", panel !== "forgot");
  ["login-error", "signup-error", "forgot-error"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = "";
      el.classList.add("hidden");
    }
  });
}

function handleForgotPassword() {
  const identifier = document
    .getElementById("forgot-id")
    .value.trim()
    .toLowerCase();
  const newPass = document.getElementById("forgot-pass").value;

  if (!identifier || !newPass) {
    showAuthError("forgot-error", t("err_signup_empty"));
    return;
  }
  if (newPass.length < 6) {
    showAuthError("forgot-error", t("err_pass_short"));
    return;
  }

  const accounts = getAccounts();
  const idx = accounts.findIndex((a) => a.id === identifier);
  if (idx === -1) {
    showAuthError("forgot-error", t("err_account_not_found"));
    return;
  }

  accounts[idx].password = newPass;
  saveAccounts(accounts);

  document.getElementById("forgot-id").value = "";
  document.getElementById("forgot-pass").value = "";
  document.getElementById("forgot-pass").type = "password";

  showAuthPanel("login");
  document.getElementById("login-id").value = identifier;
  alert(t("forgot_success"));
}
function showAuthError(id, msg) {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = msg;
    el.classList.remove("hidden");
  }
}
function toggleHrCode() {
  document
    .getElementById("hr-code-group")
    .classList.toggle(
      "hidden",
      document.getElementById("signup-role").value !== "hr",
    );
}
function toggleEye(inputId, btn) {
  const input = document.getElementById(inputId);
  if (input.type === "password") {
    input.type = "text";
    btn.textContent = "🙈";
  } else {
    input.type = "password";
    btn.textContent = "👁";
  }
}

// =====================
// ACCOUNTS
// =====================
function getAccounts() {
  try {
    return JSON.parse(localStorage.getItem("wp_accounts")) || [];
  } catch {
    return [];
  }
}
function saveAccounts(arr) {
  localStorage.setItem("wp_accounts", JSON.stringify(arr));
}
function findAccount(id) {
  return getAccounts().find((a) => a.id === id.trim().toLowerCase());
}

// =====================
// LOGIN
// =====================
function handleLogin() {
  const identifier = document
    .getElementById("login-id")
    .value.trim()
    .toLowerCase();
  const password = document.getElementById("login-pass").value;
  const remember = document.getElementById("remember-me").checked;
  if (!identifier || !password) {
    showAuthError("login-error", t("err_login_invalid"));
    return;
  }
  const account = findAccount(identifier);
  if (!account || account.password !== password) {
    showAuthError("login-error", t("err_login_invalid"));
    return;
  }
  startSession(account, remember);
}

// =====================
// SIGNUP
// =====================
function handleSignup() {
  const name = document.getElementById("signup-name").value.trim();
  const identifier = document
    .getElementById("signup-id")
    .value.trim()
    .toLowerCase();
  const password = document.getElementById("signup-pass").value;
  const role = document.getElementById("signup-role").value;
  const hrCode = document.getElementById("hr-code").value;

  if (!name || !identifier || !password) {
    showAuthError("signup-error", t("err_signup_empty"));
    return;
  }
  if (password.length < 6) {
    showAuthError("signup-error", t("err_pass_short"));
    return;
  }
  if (role === "hr" && hrCode !== HR_SECRET_CODE) {
    showAuthError("signup-error", t("err_hr_code"));
    return;
  }

  const accounts = getAccounts();
  if (accounts.find((a) => a.id === identifier)) {
    showAuthError("signup-error", t("err_signup_exists"));
    return;
  }

  const newAccount = {
    id: identifier,
    name,
    password,
    role,
    createdAt: new Date().toISOString(),
  };
  accounts.push(newAccount);
  saveAccounts(accounts);
  startSession(newAccount, false);
}

// =====================
// SESSION
// =====================
function startSession(account, remember) {
  currentUser = account;
  const data = JSON.stringify({
    id: account.id,
    role: account.role,
    name: account.name,
  });
  if (remember) {
    localStorage.setItem("wp_session", data);
  } else {
    sessionStorage.setItem("wp_session", data);
    localStorage.removeItem("wp_session");
  }
  launchApp(account);
}
function loadSession() {
  try {
    const raw =
      localStorage.getItem("wp_session") ||
      sessionStorage.getItem("wp_session");
    if (!raw) return null;
    return findAccount(JSON.parse(raw).id) || null;
  } catch {
    return null;
  }
}
function handleLogout() {
  localStorage.removeItem("wp_session");
  sessionStorage.removeItem("wp_session");
  currentUser = null;
  selectedMood = null;
  activeHrThread = null;
  document.getElementById("app").classList.add("hidden");
  document.getElementById("auth-screen").classList.remove("hidden");
  showAuthPanel("login");
  document.getElementById("login-id").value = "";
  document.getElementById("login-pass").value = "";
  document.getElementById("login-pass").type = "password";
  document.getElementById("remember-me").checked = false;
}

// =====================
// LAUNCH APP
// =====================
function launchApp(account) {
  document.getElementById("auth-screen").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");

  const initials = account.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();
  document.getElementById("user-avatar").textContent = initials;
  document.getElementById("user-name-display").textContent = account.name;

  if (account.role === "hr") {
    document.getElementById("btn-hr").classList.remove("hidden");
    document.getElementById("btn-employee").classList.add("hidden");
    showSection("hr");
  } else {
    document.getElementById("btn-hr").classList.add("hidden");
    document.getElementById("btn-employee").classList.remove("hidden");
    showSection("employee");
    renderEmployeeChat();
  }
}

// =====================
// NAVIGATION
// =====================
function showSection(name) {
  document
    .querySelectorAll(".section")
    .forEach((s) => s.classList.remove("active"));
  document
    .querySelectorAll(".nav-btn")
    .forEach((b) => b.classList.remove("active"));
  document.getElementById("section-" + name).classList.add("active");
  const btn = document.getElementById("btn-" + name);
  if (btn) btn.classList.add("active");
  if (name === "hr") refreshDashboard();
}

// =====================
// MOOD
// =====================
function selectMood(mood) {
  selectedMood = mood;
  document.querySelectorAll(".mood-btn").forEach((btn) => {
    btn.classList.toggle("selected", btn.getAttribute("data-mood") === mood);
  });
}
function submitMood() {
  if (!selectedMood) {
    showFeedback("mood-feedback", t("err_select_mood"), "error");
    return;
  }
  const moods = getAllMoods();
  moods.push({
    userId: currentUser.id,
    userName: currentUser.name,
    mood: selectedMood,
    score: MOOD_SCORES[selectedMood],
    time: new Date().toLocaleString(),
  });
  saveStorage("moods", moods);
  showFeedback("mood-feedback", t("feedback_mood"), "success");
  selectedMood = null;
  document
    .querySelectorAll(".mood-btn")
    .forEach((btn) => btn.classList.remove("selected"));
}

// =====================
// VACATION
// =====================
function submitVacation() {
  const from = document.getElementById("vacation-from").value;
  const to = document.getElementById("vacation-to").value;
  const reason = document.getElementById("vacation-reason").value.trim();
  if (!from || !to || !reason) {
    showFeedback("vacation-feedback", t("err_fill_fields"), "error");
    return;
  }
  const reqs = getAllVacations();
  reqs.push({
    userId: currentUser.id,
    name: currentUser.name,
    from,
    to,
    reason,
    time: new Date().toLocaleString(),
  });
  saveStorage("vacations", reqs);
  document.getElementById("vacation-from").value = "";
  document.getElementById("vacation-to").value = "";
  document.getElementById("vacation-reason").value = "";
  showFeedback("vacation-feedback", t("feedback_vacation"), "success");
}

// =====================
// COMPLAINT
// =====================
function submitComplaint() {
  const text = document.getElementById("complaint-text").value.trim();
  if (!text) {
    showFeedback("complaint-feedback", t("err_complaint_empty"), "error");
    return;
  }
  const list = getAllComplaints();
  list.push({ text, time: new Date().toLocaleString() });
  saveStorage("complaints", list);
  document.getElementById("complaint-text").value = "";
  showFeedback("complaint-feedback", t("feedback_complaint"), "success");
}

// =====================
// EMPLOYEE CHAT
// =====================
function sendChat() {
  const input = document.getElementById("chat-input");
  const msg = input.value.trim();
  if (!msg) return;
  const chats = getAllChats();
  chats.push({
    userId: currentUser.id,
    userName: currentUser.name,
    msg,
    fromHR: false,
    time: new Date().toLocaleString(),
  });
  saveStorage("chats", chats);
  input.value = "";
  renderEmployeeChat();
}

function renderEmployeeChat() {
  const chats = getAllChats();
  const myId = currentUser.id;
  const visible = chats.filter(
    (c) =>
      (!c.fromHR && c.userId === myId) || (c.fromHR && c.toUserId === myId),
  );
  renderChatMessages("chat-display", visible);
}

// =====================
// HR CHAT THREADS
// =====================
function initHrChatThreads() {
  const chats = getAllChats();
  const tabsEl = document.getElementById("hr-employee-tabs");
  const chatBox = document.getElementById("hr-chat-display");
  const replyRow = document.getElementById("hr-reply-row");

  const seen = {};
  const employees = [];
  chats.forEach((c) => {
    if (!c.fromHR && !seen[c.userId]) {
      seen[c.userId] = true;
      employees.push({ userId: c.userId, userName: c.userName });
    }
  });

  if (employees.length === 0) {
    tabsEl.innerHTML = '<p class="empty-msg">' + t("empty") + "</p>";
    chatBox.innerHTML = "";
    replyRow.classList.add("hidden");
    return;
  }

  tabsEl.innerHTML = "";
  employees.forEach((emp) => {
    const btn = document.createElement("button");
    btn.className =
      "emp-tab" +
      (activeHrThread && activeHrThread.userId === emp.userId ? " active" : "");
    btn.textContent = emp.userName;
    btn.onclick = () => selectHrThread(emp.userId, emp.userName);
    tabsEl.appendChild(btn);
  });

  if (activeHrThread) {
    renderHrThread(activeHrThread.userId);
    replyRow.classList.remove("hidden");
  } else {
    chatBox.innerHTML =
      '<p class="empty-msg" style="padding:20px 0;text-align:center">← Select an employee to view their messages</p>';
    replyRow.classList.add("hidden");
  }
}

function selectHrThread(userId, userName) {
  activeHrThread = { userId, userName };
  initHrChatThreads();
}

function renderHrThread(userId) {
  const chats = getAllChats();
  const visible = chats.filter(
    (c) =>
      (!c.fromHR && c.userId === userId) || (c.fromHR && c.toUserId === userId),
  );
  renderChatMessages("hr-chat-display", visible);
}

function sendHrReply() {
  if (!activeHrThread) return;
  const input = document.getElementById("hr-reply-input");
  const msg = input.value.trim();
  if (!msg) return;
  const chats = getAllChats();
  chats.push({
    userId: "hr",
    userName: currentUser.name + " (HR)",
    msg,
    fromHR: true,
    toUserId: activeHrThread.userId,
    time: new Date().toLocaleString(),
  });
  saveStorage("chats", chats);
  input.value = "";
  renderHrThread(activeHrThread.userId);
}

// =====================
// CHAT RENDERER (shared)
// =====================
function renderChatMessages(containerId, msgs) {
  const box = document.getElementById(containerId);
  if (!box) return;
  box.innerHTML = "";
  if (!msgs || msgs.length === 0) {
    box.innerHTML = '<p class="empty-msg">' + t("empty") + "</p>";
    return;
  }
  msgs.forEach((m) => {
    const bubble = document.createElement("div");
    bubble.className = "chat-bubble" + (m.fromHR ? " hr-reply" : "");
    const nameHtml = m.userName
      ? '<div class="bubble-name">' + escapeHtml(m.userName) + "</div>"
      : "";
    bubble.innerHTML =
      nameHtml +
      "<span>" +
      escapeHtml(m.msg) +
      '</span><div class="meta">' +
      m.time +
      "</div>";
    box.appendChild(bubble);
  });
  box.scrollTop = box.scrollHeight;
}

// =====================
// HR DASHBOARD
// =====================
function refreshDashboard() {
  const moods = getAllMoods();
  const vacations = getAllVacations();
  const complaints = getAllComplaints();

  document.getElementById("stat-vacations").textContent = vacations.length;
  document.getElementById("stat-complaints").textContent = complaints.length;

  if (moods.length === 0) {
    document.getElementById("stat-avg-mood").textContent = "—";
    document.getElementById("stat-mood-score").textContent = "—";
    document.getElementById("burnout-alert").classList.add("hidden");
  } else {
    const avg = moods.reduce((s, m) => s + m.score, 0) / moods.length;
    const rounded = Math.round(avg * 10) / 10;
    document.getElementById("stat-avg-mood").textContent =
      avg < 1.5 ? "😢" : avg < 2.5 ? "😐" : "😄";
    document.getElementById("stat-mood-score").textContent = rounded + " / 3";
    document
      .getElementById("burnout-alert")
      .classList.toggle("hidden", avg >= 1.8);
  }

  renderList(
    "hr-vacations",
    vacations,
    (v) =>
      "<strong>" +
      escapeHtml(v.name) +
      "</strong>" +
      escapeHtml(v.from) +
      " → " +
      escapeHtml(v.to) +
      '<div class="list-meta">' +
      escapeHtml(v.reason) +
      '</div><div class="list-meta">' +
      v.time +
      "</div>",
  );
  renderList(
    "hr-complaints",
    complaints,
    (c) =>
      "<span>" +
      escapeHtml(c.text) +
      '</span><div class="list-meta">' +
      c.time +
      "</div>",
  );
  renderList(
    "hr-mood-log",
    moods,
    (m) =>
      "<strong>" +
      MOOD_EMOJIS[m.mood] +
      " " +
      escapeHtml(m.userName || "Employee") +
      "</strong>" +
      '<span style="margin-left:6px;color:var(--text-muted);font-size:12px">' +
      m.mood +
      "</span>" +
      '<div class="list-meta">' +
      m.time +
      "</div>",
  );

  initHrChatThreads();
}

function renderList(containerId, items, tplFn) {
  const el = document.getElementById(containerId);
  if (!el) return;
  if (!items || items.length === 0) {
    el.innerHTML = '<p class="empty-msg">' + t("empty") + "</p>";
    return;
  }
  el.innerHTML = "";
  [...items].reverse().forEach((item) => {
    const div = document.createElement("div");
    div.className = "list-item";
    div.innerHTML = tplFn(item);
    el.appendChild(div);
  });
}

// =====================
// CLEAR ALL
// =====================
function clearAll() {
  showConfirm("Clear ALL data for ALL employees? This cannot be undone.", () => {
    ["moods", "vacations", "complaints", "chats"].forEach((k) =>
      localStorage.removeItem("wp_" + k),
    );
    activeHrThread = null;
    refreshDashboard();
  });
}

// =====================
// CUSTOM CONFIRM (mobile-safe replacement for native confirm())
// =====================
let _confirmCallback = null;
function showConfirm(message, onAccept) {
  document.getElementById("confirm-message").textContent = message;
  _confirmCallback = onAccept;
  document.getElementById("confirm-modal").classList.remove("hidden");
}
function closeConfirm(event) {
  if (event && event.target !== document.getElementById("confirm-modal")) return;
  document.getElementById("confirm-modal").classList.add("hidden");
  _confirmCallback = null;
}
function acceptConfirm() {
  const cb = _confirmCallback;
  _confirmCallback = null;
  document.getElementById("confirm-modal").classList.add("hidden");
  if (typeof cb === "function") cb();
}

// =====================
// ACCOUNT MODAL
// =====================
function openAccountModal() {
  const account = findAccount(currentUser.id);
  document.getElementById("acct-name").value = account
    ? account.name
    : currentUser.name;
  document.getElementById("acct-cur-pass").value = "";
  document.getElementById("acct-new-pass").value = "";
  document.getElementById("acct-name-msg").textContent = "";
  document.getElementById("acct-pass-msg").textContent = "";

  if (currentUser.role === "hr") {
    document.getElementById("acct-hr-section").classList.remove("hidden");
    renderAccountUserList();
  } else {
    document.getElementById("acct-hr-section").classList.add("hidden");
  }

  document.getElementById("account-modal").classList.remove("hidden");
}

function closeAccountModal(event) {
  if (event && event.target !== document.getElementById("account-modal"))
    return;
  document.getElementById("account-modal").classList.add("hidden");
}

function saveAccountName() {
  const newName = document.getElementById("acct-name").value.trim();
  if (!newName) {
    showFeedback("acct-name-msg", "Name cannot be empty.", "error");
    return;
  }

  const accounts = getAccounts();
  const idx = accounts.findIndex((a) => a.id === currentUser.id);
  if (idx === -1) return;
  accounts[idx].name = newName;
  saveAccounts(accounts);
  currentUser.name = newName;

  const initials = newName
    .split(" ")
    .map((w) => w[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();
  document.getElementById("user-avatar").textContent = initials;
  document.getElementById("user-name-display").textContent = newName;

  const sessionKey = localStorage.getItem("wp_session") ? "wp_session" : null;
  if (sessionKey) {
    const raw = localStorage.getItem(sessionKey);
    if (raw) {
      const s = JSON.parse(raw);
      s.name = newName;
      localStorage.setItem(sessionKey, JSON.stringify(s));
    }
  }

  showFeedback("acct-name-msg", "Name updated!", "success");
}

function saveAccountPassword() {
  const curPass = document.getElementById("acct-cur-pass").value;
  const newPass = document.getElementById("acct-new-pass").value;
  if (!curPass || !newPass) {
    showFeedback("acct-pass-msg", "Fill in both fields.", "error");
    return;
  }
  if (newPass.length < 6) {
    showFeedback("acct-pass-msg", t("err_pass_short"), "error");
    return;
  }

  const accounts = getAccounts();
  const idx = accounts.findIndex((a) => a.id === currentUser.id);
  if (idx === -1) return;
  if (accounts[idx].password !== curPass) {
    showFeedback("acct-pass-msg", "Current password is incorrect.", "error");
    return;
  }

  accounts[idx].password = newPass;
  saveAccounts(accounts);
  document.getElementById("acct-cur-pass").value = "";
  document.getElementById("acct-new-pass").value = "";
  showFeedback("acct-pass-msg", "Password changed!", "success");
}

function confirmDeleteAccount() {
  showConfirm("Delete your account permanently? This cannot be undone.", () => {
    doDeleteAccount();
  });
}
function doDeleteAccount() {
  let accounts = getAccounts();
  accounts = accounts.filter((a) => a.id !== currentUser.id);
  saveAccounts(accounts);
  document.getElementById("account-modal").classList.add("hidden");
  handleLogout();
}

function renderAccountUserList() {
  const container = document.getElementById("acct-user-list");
  const accounts = getAccounts().filter((a) => a.role !== "hr");
  if (accounts.length === 0) {
    container.innerHTML = '<p class="empty-msg">No employee accounts.</p>';
    return;
  }
  container.innerHTML = "";
  accounts.forEach((acc) => {
    const div = document.createElement("div");
    div.className = "list-item";
    div.style.display = "flex";
    div.style.justifyContent = "space-between";
    div.style.alignItems = "center";
    div.innerHTML =
      "<div>" +
      '<strong style="color:var(--primary)">' +
      escapeHtml(acc.name) +
      "</strong>" +
      '<div class="list-meta">' +
      escapeHtml(acc.id) +
      "</div>" +
      "</div>" +
      '<button class="btn-danger" style="width:auto;padding:5px 12px;font-size:12px;margin-top:0" ' +
      "onclick=\"hrDeleteAccount('" +
      escapeHtml(acc.id) +
      "')\">Delete</button>";
    container.appendChild(div);
  });
}

function hrDeleteAccount(accountId) {
  showConfirm("Delete account for " + accountId + "? This cannot be undone.", () => {
    let accounts = getAccounts();
    accounts = accounts.filter((a) => a.id !== accountId);
    saveAccounts(accounts);
    renderAccountUserList();
  });
}

// =====================
// STORAGE
// =====================
function getAllMoods() {
  return getStorage("moods") || [];
}
function getAllVacations() {
  return getStorage("vacations") || [];
}
function getAllComplaints() {
  return getStorage("complaints") || [];
}
function getAllChats() {
  return getStorage("chats") || [];
}
function getStorage(key) {
  try {
    return JSON.parse(localStorage.getItem("wp_" + key));
  } catch {
    return null;
  }
}
function saveStorage(key, value) {
  localStorage.setItem("wp_" + key, JSON.stringify(value));
}

// =====================
// FEEDBACK
// =====================
function showFeedback(id, msg, type) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = msg;
  el.className = "feedback-msg " + type;
  setTimeout(() => {
    el.textContent = "";
    el.className = "feedback-msg";
  }, 3500);
}

// =====================
// SECURITY
// =====================
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// =====================
// INIT
// =====================
(function init() {
  loadTheme();
  setLang("en");
  const session = loadSession();
  if (session) launchApp(session);
})();
