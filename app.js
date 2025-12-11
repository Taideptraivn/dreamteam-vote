// Địa chỉ contract DreamTeamVote trên Sepolia
const CONTRACT_ADDRESS = "0xEa947f66a874Aa907AdDaD0102e0230123c8B098";

// ABI rút gọn, chỉ các hàm giao diện cần dùng
const CONTRACT_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function buyVoteToken() payable",
  "function vote(uint256[11] calldata playerIds)",
  "function owner() view returns (address)",
  "function taskCompleted(address user) view returns (bool)",
  "function setTaskCompleted(address user, bool completed)",
  "function withdrawFees(address payable to)"
];

// Dataset cầu thủ (khớp với hợp đồng)
const PLAYERS = [
  // ATT
  {id:1001, name:"R. Lewandowski", club:"FC Bayern Munchen", pos:"ATT"},
  {id:1002, name:"Cristiano Ronaldo", club:"Manchester United", pos:"ATT"},
  {id:1003, name:"H. Kane", club:"Tottenham Hotspur", pos:"ATT"},
  {id:1004, name:"R. Lukaku", club:"Chelsea", pos:"ATT"},
  {id:1005, name:"E. Haaland", club:"Borussia Dortmund", pos:"ATT"},
  {id:1006, name:"K. Benzema", club:"Real Madrid CF", pos:"ATT"},
  {id:1007, name:"Neymar Jr", club:"Paris Saint-Germain", pos:"ATT"},
  {id:1008, name:"K. Mbappe", club:"Paris Saint-Germain", pos:"ATT"},
  {id:1009, name:"J. Sancho", club:"Manchester United", pos:"ATT"},
  {id:1010, name:"R. Sterling", club:"Manchester City", pos:"ATT"},
  {id:1011, name:"Sadio Mane", club:"Liverpool", pos:"ATT"},
  {id:1012, name:"Mohamed Salah", club:"Liverpool", pos:"ATT"},
  {id:1013, name:"T. Werner", club:"Chelsea", pos:"ATT"},
  {id:1014, name:"E. Cavani", club:"Manchester United", pos:"ATT"},
  {id:1015, name:"Z. Ibrahimovic", club:"AC Milan", pos:"ATT"},
  {id:1016, name:"Memphis Depay", club:"FC Barcelona", pos:"ATT"},
  {id:1017, name:"J. Ilicic", club:"Atalanta", pos:"ATT"},
  {id:1018, name:"A. Griezmann", club:"Atletico de Madrid", pos:"ATT"},
  {id:1019, name:"P. Dybala", club:"Juventus", pos:"ATT"},
  {id:1020, name:"L. Suarez", club:"Atletico de Madrid", pos:"ATT"},
  {id:1021, name:"J. Felix", club:"Atletico de Madrid", pos:"ATT"},
  {id:1022, name:"G. Bale", club:"Real Madrid CF", pos:"ATT"},
  {id:1023, name:"F. Chiesa", club:"Juventus", pos:"ATT"},
  {id:1024, name:"A. Martial", club:"Manchester United", pos:"ATT"},
  {id:1025, name:"K. Coman", club:"FC Bayern Munchen", pos:"ATT"},

  // DEF
  {id:1026, name:"T. Alexander-Arnold", club:"Liverpool", pos:"DEF"},
  {id:1027, name:"A. Robertson", club:"Liverpool", pos:"DEF"},
  {id:1028, name:"M. Skriniar", club:"Inter", pos:"DEF"},
  {id:1029, name:"G. Chiellini", club:"Juventus", pos:"DEF"},
  {id:1030, name:"Joao Cancelo", club:"Manchester City", pos:"DEF"},
  {id:1031, name:"K. Koulibaly", club:"Napoli", pos:"DEF"},
  {id:1032, name:"M. Hummels", club:"Borussia Dortmund", pos:"DEF"},
  {id:1033, name:"R. Varane", club:"Manchester United", pos:"DEF"},
  {id:1034, name:"A. Laporte", club:"Manchester City", pos:"DEF"},
  {id:1035, name:"Fabinho", club:"Liverpool", pos:"DEF"},
  {id:1036, name:"Carvajal", club:"Real Madrid CF", pos:"DEF"},
  {id:1037, name:"S. de Vrij", club:"Inter", pos:"DEF"},
  {id:1038, name:"Koke", club:"Atletico de Madrid", pos:"DEF"},
  {id:1039, name:"K. Walker", club:"Manchester City", pos:"DEF"},
  {id:1040, name:"L. Bonucci", club:"Juventus", pos:"DEF"},

  // GK
  {id:1041, name:"J. Oblak", club:"Atletico de Madrid", pos:"GK"},
  {id:1042, name:"M. Neuer", club:"FC Bayern Munchen", pos:"GK"},
  {id:1043, name:"M. ter Stegen", club:"FC Barcelona", pos:"GK"},
  {id:1044, name:"T. Courtois", club:"Real Madrid CF", pos:"GK"},
  {id:1045, name:"Ederson", club:"Manchester City", pos:"GK"},
  {id:1046, name:"A. Becker", club:"Liverpool", pos:"GK"},
  {id:1047, name:"H. Lloris", club:"Tottenham Hotspur", pos:"GK"},
  {id:1048, name:"K. Navas", club:"Paris Saint-Germain", pos:"GK"},
  {id:1049, name:"S. Handanovic", club:"Inter", pos:"GK"},
  {id:1050, name:"P. Gulacsi", club:"RB Leipzig", pos:"GK"},
  {id:1051, name:"De Gea", club:"Manchester United", pos:"GK"},

  // MID
  {id:1052, name:"J. Kimmich", club:"FC Bayern Munchen", pos:"MID"},
  {id:1053, name:"K. De Bruyne", club:"Manchester City", pos:"MID"},
  {id:1054, name:"T. Kroos", club:"Real Madrid CF", pos:"MID"},
  {id:1055, name:"L. Modric", club:"Real Madrid CF", pos:"MID"},
  {id:1056, name:"N. Kante", club:"Chelsea", pos:"MID"},
  {id:1057, name:"P. Pogba", club:"Manchester United", pos:"MID"},
  {id:1058, name:"Bruno Fernandes", club:"Manchester United", pos:"MID"},
  {id:1059, name:"M. Verratti", club:"Paris Saint-Germain", pos:"MID"},
  {id:1060, name:"F. de Jong", club:"FC Barcelona", pos:"MID"},
  {id:1061, name:"S. Mane", club:"Liverpool", pos:"MID"},
  {id:1062, name:"J. Henderson", club:"Liverpool", pos:"MID"},
  {id:1063, name:"Thiago", club:"Liverpool", pos:"MID"},
  {id:1064, name:"Casemiro", club:"Real Madrid CF", pos:"MID"},
  {id:1065, name:"Rodri", club:"Manchester City", pos:"MID"},
  {id:1066, name:"Bernardo Silva", club:"Manchester City", pos:"MID"},
  {id:1067, name:"I. Gundogan", club:"Manchester City", pos:"MID"},
  {id:1068, name:"Saul", club:"Atletico de Madrid", pos:"MID"},
  {id:1069, name:"M. Kovacic", club:"Chelsea", pos:"MID"},
  {id:1070, name:"Jorginho", club:"Chelsea", pos:"MID"},
  {id:1071, name:"Arthur", club:"Juventus", pos:"MID"},
  {id:1072, name:"Barella", club:"Inter", pos:"MID"},
  {id:1073, name:"David Silva", club:"Real Sociedad", pos:"MID"},
  {id:1074, name:"M. Reus", club:"Borussia Dortmund", pos:"MID"},
  {id:1075, name:"A. Witsel", club:"Borussia Dortmund", pos:"MID"},
  {id:1076, name:"J. Brandt", club:"Borussia Dortmund", pos:"MID"},
  {id:1077, name:"P. Zielinski", club:"Napoli", pos:"MID"},
  {id:1078, name:"H. Winks", club:"Tottenham Hotspur", pos:"MID"},
  {id:1079, name:"S. Milinkovic-Savic", club:"Lazio", pos:"MID"},
];

let provider;
let signer;
let contract;
let currentAccount;
let contractOwner;

// DOM elements
const connectButton = document.getElementById("connectButton");
const walletInfo = document.getElementById("walletInfo");
const accountAddressSpan = document.getElementById("accountAddress");
const networkNameSpan = document.getElementById("networkName");
const tokenBalanceSpan = document.getElementById("tokenBalance");
const taskStatusSpan = document.getElementById("taskStatus");
const refreshInfoButton = document.getElementById("refreshInfoButton");

const buyTokenButton = document.getElementById("buyTokenButton");
const voteButton = document.getElementById("voteButton");
const userStatus = document.getElementById("userStatus");

const adminUserAddress = document.getElementById("adminUserAddress");
const adminTaskStatus = document.getElementById("adminTaskStatus");
const setTaskButton = document.getElementById("setTaskButton");
const withdrawToAddress = document.getElementById("withdrawToAddress");
const withdrawButton = document.getElementById("withdrawButton");
const adminStatus = document.getElementById("adminStatus");

// Selects
const gkSelect  = document.getElementById("gkSelect");
const def1Select = document.getElementById("def1Select");
const def2Select = document.getElementById("def2Select");
const def3Select = document.getElementById("def3Select");
const def4Select = document.getElementById("def4Select");
const mid1Select = document.getElementById("mid1Select");
const mid2Select = document.getElementById("mid2Select");
const mid3Select = document.getElementById("mid3Select");
const att1Select = document.getElementById("att1Select");
const att2Select = document.getElementById("att2Select");
const att3Select = document.getElementById("att3Select");

// ===== Helper để fill select =====
function addOptions(selectEl, position) {
  const list = PLAYERS.filter(p => p.pos === position);
  list.forEach(p => {
    const opt = document.createElement("option");
    opt.value = String(p.id);
    opt.textContent = `${p.name} (${p.club}) - ID: ${p.id}`;
    selectEl.appendChild(opt);
  });
}

function initPlayerSelects() {
  addOptions(gkSelect, "GK");
  [def1Select, def2Select, def3Select, def4Select].forEach(sel => addOptions(sel, "DEF"));
  [mid1Select, mid2Select, mid3Select].forEach(sel => addOptions(sel, "MID"));
  [att1Select, att2Select, att3Select].forEach(sel => addOptions(sel, "ATT"));
}

// ===== Kết nối ví =====
async function connectWallet() {
  if (typeof window.ethereum === "undefined") {
    walletInfo.textContent = "Không tìm thấy MetaMask. Hãy cài MetaMask và bật extension.";
    return;
  }

  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts"
    });
    currentAccount = accounts[0];

    provider = new ethers.providers.Web3Provider(window.ethereum);
    signer = provider.getSigner();
    contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

    const net = await provider.getNetwork();
    networkNameSpan.textContent = `${net.name} (chainId ${net.chainId})`;

    accountAddressSpan.textContent = currentAccount;
    walletInfo.textContent = "Đã kết nối MetaMask với địa chỉ: " + currentAccount;

    buyTokenButton.disabled = false;
    voteButton.disabled = false;
    refreshInfoButton.disabled = false;
    setTaskButton.disabled = false;
    withdrawButton.disabled = false;

    contractOwner = await contract.owner();
    walletInfo.textContent += "\nOwner contract: " + contractOwner;

    await refreshInfo();
  } catch (err) {
    console.error(err);
    walletInfo.textContent = "Lỗi khi kết nối: " + (err.message || err);
  }
}

// ===== Cập nhật thông tin tài khoản =====
async function refreshInfo() {
  if (!contract || !currentAccount) return;
  try {
    const balance = await contract.balanceOf(currentAccount);
    tokenBalanceSpan.textContent = ethers.utils.formatUnits(balance, 18);

    const task = await contract.taskCompleted(currentAccount);
    taskStatusSpan.textContent = task ? "Đã được admin xác nhận ✅" : "Chưa được xác nhận ❌";
    taskStatusSpan.className = task ? "badge" : "";
  } catch (err) {
    console.error(err);
    userStatus.textContent = "Lỗi khi cập nhật thông tin: " + (err.message || err);
  }
}

// ===== Mua token vote =====
async function buyToken() {
  if (!contract) return;
  try {
    userStatus.textContent = "Đang gửi giao dịch mua token...";
    const tx = await contract.buyVoteToken({
      value: ethers.utils.parseEther("0.01")
    });
    await tx.wait();
    userStatus.textContent = "Mua token thành công! Tx: " + tx.hash;
    await refreshInfo();
  } catch (err) {
    console.error(err);
    userStatus.textContent = "Lỗi khi mua token: " + (err.message || err);
  }
}

// ===== Thu thập 11 ID từ các select =====
function collectSelectedIds() {
  const ids = [
    gkSelect.value,
    def1Select.value, def2Select.value, def3Select.value, def4Select.value,
    mid1Select.value, mid2Select.value, mid3Select.value,
    att1Select.value, att2Select.value, att3Select.value
  ];

  if (ids.some(v => !v)) {
    throw new Error("Bạn phải chọn đủ 11 cầu thủ (không được để trống).");
  }

  const set = new Set(ids);
  if (set.size !== ids.length) {
    throw new Error("Danh sách cầu thủ bị trùng. Mỗi cầu thủ chỉ được chọn 1 lần.");
  }

  return ids;
}

// ===== Gửi vote =====
async function sendVote() {
  if (!contract) return;
  try {
    const ids = collectSelectedIds();
    userStatus.textContent = "Đang gửi giao dịch vote...";

    // ethers v5 sẽ map array JS -> uint256[11]
    const tx = await contract.vote(ids);
    await tx.wait();
    userStatus.textContent = "Vote thành công! Tx: " + tx.hash;
    await refreshInfo();
  } catch (err) {
    console.error(err);
    userStatus.textContent = "Lỗi khi vote: " + (err.error?.message || err.message || err);
  }
}

// ===== Admin: setTaskCompleted =====
async function adminSetTask() {
  if (!contract) return;
  try {
    const userAddr = adminUserAddress.value.trim();
    if (!ethers.utils.isAddress(userAddr)) {
      adminStatus.textContent = "Địa chỉ user không hợp lệ.";
      return;
    }
    const completed = adminTaskStatus.value === "true";
    adminStatus.textContent = "Đang gửi giao dịch setTaskCompleted...";
    const tx = await contract.setTaskCompleted(userAddr, completed);
    await tx.wait();
    adminStatus.textContent = "Set taskCompleted thành công! Tx: " + tx.hash;
  } catch (err) {
    console.error(err);
    adminStatus.textContent = "Lỗi khi setTaskCompleted: " + (err.error?.message || err.message || err);
  }
}

// ===== Admin: withdrawFees =====
async function adminWithdraw() {
  if (!contract) return;
  try {
    let to = withdrawToAddress.value.trim();
    if (!to) to = currentAccount;
    if (!ethers.utils.isAddress(to)) {
      adminStatus.textContent = "Địa chỉ rút không hợp lệ.";
      return;
    }
    adminStatus.textContent = "Đang gửi giao dịch withdrawFees...";
    const tx = await contract.withdrawFees(to);
    await tx.wait();
    adminStatus.textContent = "Rút phí thành công! Tx: " + tx.hash;
  } catch (err) {
    console.error(err);
    adminStatus.textContent = "Lỗi khi rút phí: " + (err.error?.message || err.message || err);
  }
}

// ===== Gắn event =====
window.addEventListener("load", () => {
  initPlayerSelects();

  connectButton.addEventListener("click", connectWallet);
  refreshInfoButton.addEventListener("click", refreshInfo);
  buyTokenButton.addEventListener("click", buyToken);
  voteButton.addEventListener("click", sendVote);
  setTaskButton.addEventListener("click", adminSetTask);
  withdrawButton.addEventListener("click", adminWithdraw);
});
