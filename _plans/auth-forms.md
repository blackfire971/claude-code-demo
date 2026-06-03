# Plan: Authentication Forms for Login and Signup

## Context

`/login` 和 `/signup` 页面目前只有占位标题，没有表单。需要构建可复用的 `AuthForm` 组件，提供邮箱/密码输入、密码可见性切换、提交按钮（仅 console.log）、以及表单间导航。这是项目的第一个客户端交互组件。

## 架构决策

**复用 `AuthForm` 组件** — 两个表单结构完全相同，仅标题/按钮文字/导航链接不同。通过 `mode: "login" | "signup"` prop 区分，页面文件只做薄包装。

## 文件操作

### 新建

| 文件 | 说明 |
|---|---|
| `components/AuthForm/AuthForm.tsx` | 客户端表单组件（`'use client'`），useState 管理 email/password/showPassword，Eye/EyeOff 图标切换，onSubmit 打印 `{ form, email, password }` |
| `components/AuthForm/AuthForm.module.css` | CSS Module，`@reference` 引入 globals.css，用 `@apply` 组合样式（input、toggle 按钮、submit 扩展等） |
| `components/AuthForm/index.ts` | Barrel re-export |
| `tests/components/AuthForm.test.tsx` | 测试：login 模式渲染、signup 模式渲染、密码切换、提交日志、导航链接 |

### 修改

| 文件 | 变更 |
|---|---|
| `app/(public)/login/page.tsx` | 修复组件名 `SignupPage` → `LoginPage`，替换内容为 `<AuthForm mode="login" />` |
| `app/(public)/signup/page.tsx` | 替换内容为 `<AuthForm mode="signup" />` |

## 组件 API

```typescript
interface AuthFormProps {
  mode: "login" | "signup"
}
```

## 状态

- `email: string`, `password: string`, `showPassword: boolean` — 三个 `useState`
- 提交时 `e.preventDefault()` + `console.log({ form: mode, email, password })`
- `<form noValidate>` 允许空值提交（符合 spec edge case）

## 样式方案

- CSS Module 中用 `@apply` 组合 Tailwind utilities（遵循 CLAUDE.md：多 class 时不直接写 tailwind）
- 复用 globals.css 中的 `.btn`、`.form-title` 等全局类
- 密码切换按钮绝对定位在 input 内右侧，lucide-react 的 `Eye`/`EyeOff` 图标

## 测试用例

1. Login 模式渲染 email、password toggle、"Login" 按钮
2. Signup 模式渲染 email、password toggle、"Sign Up" 按钮
3. 点击 toggle 切换 password ↔ text，aria-label 更新
4. 提交时 `console.log` 被调用，包含正确数据
5. Login 模式显示 Sign up 导航链接（href="/signup"）
6. Signup 模式显示 Log in 导航链接（href="/login"）

## 验证

```bash
npm test -- --run                    # 运行所有测试
npm run dev                          # 启动开发服务器，手动检查 /login 和 /signup 页面
```

手动验证：打开浏览器访问 `/login` 和 `/signup`，填写表单、切换密码可见性、提交并查看控制台，点击导航链接确认跳转。
