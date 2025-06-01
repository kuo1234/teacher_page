"use client"

import { useState } from "react"
import {
  User,
  BookOpen,
  Users,
  DollarSign,
  Settings,
  Upload,
  Edit,
  Eye,
  Plus,
  Star,
  Menu,
  X,
  ChevronRight,
  Phone,
  Mail,
  Calendar,
  Check,
  Camera,
} from "lucide-react"

const MobileTeacherApp = () => {
  const [activeTab, setActiveTab] = useState("profile")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isRegistering, setIsRegistering] = useState(false)

  const menuItems = [
    { id: "profile", label: "個人資料", icon: User },
    { id: "courses", label: "課程管理", icon: BookOpen },
    { id: "students", label: "學生管理", icon: Users },
    { id: "finance", label: "財務管理", icon: DollarSign },
    { id: "settings", label: "設定", icon: Settings },
  ]

  // 頂部導航欄
  const TopNav = () => (
    <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center sticky top-0 z-50">
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <h1 className="text-lg font-semibold">教師管理系統</h1>
      <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center">
        <User size={16} />
      </div>
    </div>
  )

  // 側邊選單
  const SideMenu = () => (
    <div
      className={`fixed inset-0 z-40 transition-opacity ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)} />
      <div
        className={`absolute left-0 top-0 h-full w-64 bg-white transform transition-transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <User size={20} className="text-white" />
            </div>
            <div>
              <p className="font-semibold">張老師</p>
              <p className="text-sm text-gray-600">數學專業教師</p>
            </div>
          </div>
        </div>
        <nav className="p-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id)
                  setIsMenuOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg mb-1 ${
                  activeTab === item.id ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
                <ChevronRight size={16} className="ml-auto" />
              </button>
            )
          })}
        </nav>
      </div>
    </div>
  )

  // 個人資料頁面
  const ProfilePage = () => (
    <div className="p-4 space-y-4">
      {!isRegistering ? (
        <>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">個人資料</h2>
              <button
                onClick={() => setIsRegistering(true)}
                className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm flex items-center gap-1"
              >
                <Edit size={14} />
                編輯
              </button>
            </div>

            <div className="text-center mb-4">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                <User size={32} className="text-gray-400" />
              </div>
              <h3 className="font-semibold text-lg">張老師</h3>
              <p className="text-gray-600 text-sm">Teacher Zhang</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Calendar size={16} className="text-gray-500" />
                <div>
                  <p className="text-sm text-gray-600">出生年月日</p>
                  <p className="font-medium">1985/03/15</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Mail size={16} className="text-gray-500" />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium">zhang.teacher@email.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Phone size={16} className="text-gray-500" />
                <div>
                  <p className="text-sm text-gray-600">聯繫電話</p>
                  <p className="font-medium">0912-345-678</p>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <h4 className="font-medium mb-2">教學專長</h4>
              <p className="text-sm text-gray-700">高中數學教學經驗10年，專精微積分、統計學，多益990分認證</p>
            </div>

            <div className="flex gap-2 mt-4">
              <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">已驗證</div>
              <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">合作商</div>
            </div>
          </div>
        </>
      ) : (
        <MobileRegistrationForm onCancel={() => setIsRegistering(false)} />
      )}
    </div>
  )

  // 手機版註冊表單
  const MobileRegistrationForm = ({ onCancel }: { onCancel: () => void }) => (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">身份註冊</h2>
          <button onClick={onCancel} className="text-gray-500">
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">中文姓名 *</label>
            <input type="text" className="w-full border rounded-lg px-3 py-3" placeholder="請輸入中文姓名" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">英文姓名 / 藝名</label>
            <input type="text" className="w-full border rounded-lg px-3 py-3" placeholder="請輸入英文姓名或藝名" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-2">出生年月日 *</label>
              <input type="date" className="w-full border rounded-lg px-3 py-3 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">性別 *</label>
              <select className="w-full border rounded-lg px-3 py-3">
                <option>請選擇</option>
                <option>男</option>
                <option>女</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email *</label>
            <input type="email" className="w-full border rounded-lg px-3 py-3" placeholder="example@email.com" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">聯繫電話 *</label>
            <input type="tel" className="w-full border rounded-lg px-3 py-3" placeholder="0912-345-678" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">學歷 *</label>
            <input type="text" className="w-full border rounded-lg px-3 py-3" placeholder="請輸入最高學歷" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">大頭貼</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Camera className="mx-auto text-gray-400 mb-2" size={24} />
              <p className="text-sm text-gray-600">點擊上傳照片</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">教學專長及履歷</label>
            <textarea
              className="w-full border rounded-lg px-3 py-3 h-24 text-sm"
              placeholder="請詳細描述您的教學專長..."
            ></textarea>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="font-medium mb-4">身份驗證文件</h3>
        <div className="space-y-3">
          {[
            { label: "身分證", required: true },
            { label: "良民證（一個月內）", required: true },
            { label: "畢業證書或學生證", required: true },
            { label: "指定動作拍照", required: true },
            { label: "相關證照", required: false },
          ].map((doc, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">{doc.label}</span>
                {doc.required && <span className="text-red-500 text-xs">必填</span>}
              </div>
              <button className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 text-sm text-gray-600 flex items-center justify-center gap-2">
                <Upload size={16} />
                選擇檔案
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="font-medium mb-4">銀行帳號設定</h3>
        <div className="space-y-3">
          <select className="w-full border rounded-lg px-3 py-3">
            <option>選擇銀行</option>
            <option>中國信託</option>
            <option>富邦銀行</option>
            <option>玉山銀行</option>
          </select>
          <input type="text" className="w-full border rounded-lg px-3 py-3" placeholder="請輸入帳號" />
          <button className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2 text-sm text-gray-600 flex items-center justify-center gap-2">
            <Upload size={16} />
            上傳戶頭影本
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="font-medium mb-4">分潤模組設定</h3>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="block text-xs text-gray-600 mb-1">老師 (%)</label>
            <input type="number" className="w-full border rounded-lg px-3 py-2 text-center" placeholder="70" />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">機構 (%)</label>
            <input type="number" className="w-full border rounded-lg px-3 py-2 text-center" placeholder="20" />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">場地 (%)</label>
            <input type="number" className="w-full border rounded-lg px-3 py-2 text-center" placeholder="10" />
          </div>
        </div>
      </div>

      <div className="flex gap-3 p-4">
        <button onClick={onCancel} className="flex-1 py-3 border border-gray-300 rounded-lg text-gray-700">
          取消
        </button>
        <button className="flex-1 py-3 bg-blue-600 text-white rounded-lg">提交申請</button>
      </div>
    </div>
  )

  // 課程管理頁面
  const CoursePage = () => (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">課程管理</h2>
        <button className="bg-green-600 text-white px-3 py-2 rounded-lg text-sm flex items-center gap-1">
          <Plus size={14} />
          開課
        </button>
      </div>

      <div className="space-y-3">
        {[
          { name: "高中數學精修班", status: "已上架", students: "8/12", price: "2000", location: "台北市信義區" },
          { name: "國中數學基礎班", status: "審核中", students: "0/10", price: "1500", location: "台北市大安區" },
          { name: "小學數學啟蒙", status: "已結束", students: "10/10", price: "1200", location: "線上課程" },
        ].map((course, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-semibold text-lg">{course.name}</h3>
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  course.status === "已上架"
                    ? "bg-green-100 text-green-800"
                    : course.status === "審核中"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-gray-100 text-gray-800"
                }`}
              >
                {course.status}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <p className="text-gray-600">學生數</p>
                <p className="font-semibold">{course.students}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-600">價格</p>
                <p className="font-semibold">NT$ {course.price}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-600">地點</p>
                <p className="font-semibold text-xs">{course.location}</p>
              </div>
            </div>

            <div className="flex gap-2 mt-3">
              <button className="flex-1 py-2 border border-gray-300 rounded text-sm flex items-center justify-center gap-1">
                <Eye size={14} />
                查看
              </button>
              <button className="flex-1 py-2 bg-blue-600 text-white rounded text-sm flex items-center justify-center gap-1">
                <Edit size={14} />
                編輯
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 rounded-lg p-4">
        <h3 className="font-medium mb-2">課程設定提醒</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• 線上課程：1對1到1對4</li>
          <li>• 線下團體班：最少2人開課</li>
          <li>• 不提供線下私人家教</li>
        </ul>
      </div>
    </div>
  )

  // 學生管理頁面
  const StudentPage = () => (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">學生管理</h2>

      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="font-medium mb-3">報名學員</h3>
        <div className="space-y-3">
          {[
            { name: "王小明", course: "高中數學精修班", status: "已繳費", avatar: "W" },
            { name: "李小華", course: "高中數學精修班", status: "未繳費", avatar: "L" },
            { name: "張小美", course: "國中數學基礎班", status: "已繳費", avatar: "Z" },
          ].map((student, index) => (
            <div key={index} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                {student.avatar}
              </div>
              <div className="flex-1">
                <p className="font-medium">{student.name}</p>
                <p className="text-sm text-gray-600">{student.course}</p>
              </div>
              <span
                className={`px-2 py-1 rounded text-xs ${
                  student.status === "已繳費" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                {student.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-medium">待回覆問題</h3>
          <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">2</span>
        </div>
        <div className="space-y-3">
          {[
            { student: "王小明", question: "這週的作業範圍是什麼？", time: "2小時前", replied: false },
            { student: "李小華", question: "下次上課時間有調整嗎？", time: "1天前", replied: true },
          ].map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-3">
              <div className="flex justify-between items-center mb-2">
                <p className="font-medium text-sm">{item.student}</p>
                <span className="text-xs text-gray-500">{item.time}</span>
              </div>
              <p className="text-sm text-gray-700 mb-2">{item.question}</p>
              {!item.replied ? (
                <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs">回覆</button>
              ) : (
                <span className="text-green-600 text-xs flex items-center gap-1">
                  <Check size={12} />
                  已回覆
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="font-medium mb-3">最新評價</h3>
        <div className="space-y-3">
          {[
            { student: "王小明", rating: 5, comment: "老師教學很清楚！" },
            { student: "李小華", rating: 4, comment: "內容豐富，希望多練習。" },
          ].map((review, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-3">
              <div className="flex justify-between items-center mb-2">
                <p className="font-medium text-sm">{review.student}</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  // 財務管理頁面
  const FinancePage = () => (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">財務管理</h2>

      <div className="grid grid-cols-1 gap-3">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-4">
          <p className="text-sm opacity-90">本月總收入</p>
          <p className="text-2xl font-bold">NT$ 45,000</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm text-green-700">已結算</p>
            <p className="text-lg font-bold text-green-600">NT$ 31,500</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <p className="text-sm text-yellow-700">待結算</p>
            <p className="text-lg font-bold text-yellow-600">NT$ 13,500</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="font-medium mb-3">收入明細</h3>
        <div className="space-y-3">
          {[
            { course: "高中數學精修班", income: "16000", students: 8, status: "已結算" },
            { course: "國中數學基礎班", income: "15000", students: 10, status: "已結算" },
            { course: "小學數學啟蒙", income: "14000", students: 12, status: "待結算" },
          ].map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-3">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-medium text-sm">{item.course}</p>
                  <p className="text-xs text-gray-600">{item.students} 位學生</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">NT$ {item.income}</p>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      item.status === "已結算" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="font-medium mb-3">分潤明細</h3>
        <div className="bg-gray-50 p-3 rounded-lg space-y-2 text-sm">
          <div className="flex justify-between">
            <span>課程總收入：</span>
            <span className="font-medium">NT$ 45,000</span>
          </div>
          <div className="flex justify-between text-blue-600">
            <span>老師分潤 (70%)：</span>
            <span className="font-medium">NT$ 31,500</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>機構分潤 (20%)：</span>
            <span>NT$ 9,000</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>場地分潤 (10%)：</span>
            <span>NT$ 4,500</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-bold text-green-600">
            <span>實際收入：</span>
            <span>NT$ 31,500</span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNav />
      <SideMenu />

      <div className="pb-20">
        {activeTab === "profile" && <ProfilePage />}
        {activeTab === "courses" && <CoursePage />}
        {activeTab === "students" && <StudentPage />}
        {activeTab === "finance" && <FinancePage />}
      </div>

      {/* 底部導航 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex justify-around">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center gap-1 py-2 px-3 rounded-lg ${
                  activeTab === item.id ? "text-blue-600" : "text-gray-500"
                }`}
              >
                <Icon size={20} />
                <span className="text-xs">{item.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MobileTeacherApp
