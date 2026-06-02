// this page should be used only as a splash page to decide where a user should be navigated to
// when logged in --> to /heists
// when not logged in --> to /login

import { Clock8, Skull, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <div className="center-content">
      <div className="page-content space-y-6">
        <h1>
          P<Clock8 className="logo" strokeWidth={2.75} />cket Heist
        </h1>
        <p className="text-xl text-body/80 max-w-xl mx-auto leading-relaxed">
          Every desk job needs a <strong className="text-primary">side quest</strong>.
          Assign mischievous missions to coworkers — from stapler heists to mug
          reorganizations — and make the 9-to-5 a little more interesting.
        </p>
        <p className="text-body/60 max-w-md mx-auto">
          <Sparkles className="inline-block size-4 text-secondary" /> Ready to cause some trouble?
          Sign up or log in to start your first heist.
          <Skull className="inline-block size-4 text-primary ml-1" />
        </p>
      </div>
    </div>
  )
}
