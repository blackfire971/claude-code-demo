// preview page for newly created UI components

import Skeleton from "@/components/Skeleton"
import Avatar from "@/components/Avatar"

export default function PreviewPage() {
  return (
    <div className="page-content space-y-10">
      <h2>Component Preview</h2>

      {/* Skeleton — default rectangle variant */}
      <section className="space-y-3">
        <h3>Skeleton — Default</h3>
        <div className="grid grid-cols-4 gap-6">
          <div className="space-y-2">
            <p className="text-sm text-body/60">sm</p>
            <Skeleton size="sm" className="w-full" />
          </div>
          <div className="space-y-2">
            <p className="text-sm text-body/60">md</p>
            <Skeleton size="md" className="w-full" />
          </div>
          <div className="space-y-2">
            <p className="text-sm text-body/60">lg</p>
            <Skeleton size="lg" className="w-full" />
          </div>
          <div className="space-y-2">
            <p className="text-sm text-body/60">xl</p>
            <Skeleton size="xl" className="w-full" />
          </div>
        </div>
      </section>

      {/* Skeleton — text variant (multi-line) */}
      <section className="space-y-3">
        <h3>Skeleton — Text Lines</h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-3">
            <p className="text-sm text-body/60">Article block</p>
            <Skeleton variant="text" size="xl" width="75%" />
            <Skeleton variant="text" size="lg" />
            <Skeleton variant="text" size="lg" width="90%" />
            <Skeleton variant="text" size="md" />
            <Skeleton variant="text" size="md" width="60%" />
          </div>
          <div className="space-y-3">
            <p className="text-sm text-body/60">Card text</p>
            <Skeleton variant="text" size="lg" width="85%" />
            <Skeleton variant="text" size="md" />
            <Skeleton variant="text" size="md" width="70%" />
            <Skeleton variant="text" size="sm" width="40%" />
          </div>
        </div>
      </section>

      {/* Skeleton — circle variant */}
      <section className="space-y-3">
        <h3>Skeleton — Circle</h3>
        <div className="flex gap-6 items-end">
          <div className="space-y-2 text-center">
            <p className="text-sm text-body/60">sm</p>
            <Skeleton variant="circle" size="sm" className="size-8" />
          </div>
          <div className="space-y-2 text-center">
            <p className="text-sm text-body/60">md</p>
            <Skeleton variant="circle" size="md" className="size-12" />
          </div>
          <div className="space-y-2 text-center">
            <p className="text-sm text-body/60">lg</p>
            <Skeleton variant="circle" size="lg" className="size-16" />
          </div>
          <div className="space-y-2 text-center">
            <p className="text-sm text-body/60">xl</p>
            <Skeleton variant="circle" size="xl" className="size-20" />
          </div>
        </div>
      </section>

      {/* Avatar — initials display */}
      <section className="space-y-3">
        <h3>Avatar — Initials</h3>
        <div className="flex gap-6 items-center">
          <div className="space-y-2 text-center">
            <p className="text-sm text-body/60">Simple name</p>
            <Avatar name="Alice" />
          </div>
          <div className="space-y-2 text-center">
            <p className="text-sm text-body/60">PascalCase</p>
            <Avatar name="JohnDoe" />
          </div>
          <div className="space-y-2 text-center">
            <p className="text-sm text-body/60">Single letter</p>
            <Avatar name="Sam" />
          </div>
          <div className="space-y-2 text-center">
            <p className="text-sm text-body/60">Multi-upper</p>
            <Avatar name="JSONParser" />
          </div>
        </div>
      </section>

      {/* Skeleton — card mockups */}
      <section className="space-y-3">
        <h3>Skeleton — Card Mockups</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-lighter rounded-xl p-4 space-y-3">
            <Skeleton variant="default" size="xl" className="h-32 w-full rounded-lg" />
            <Skeleton variant="text" size="lg" width="80%" />
            <Skeleton variant="text" size="md" />
            <Skeleton variant="text" size="md" width="60%" />
            <Skeleton variant="circle" className="size-8" />
          </div>
          <div className="bg-lighter rounded-xl p-4 space-y-3">
            <Skeleton variant="default" size="xl" className="h-32 w-full rounded-lg" />
            <Skeleton variant="text" size="lg" width="75%" />
            <Skeleton variant="text" size="md" />
            <Skeleton variant="text" size="md" width="50%" />
            <Skeleton variant="circle" className="size-8" />
          </div>
          <div className="bg-lighter rounded-xl p-4 space-y-3">
            <Skeleton variant="default" size="xl" className="h-32 w-full rounded-lg" />
            <Skeleton variant="text" size="lg" width="85%" />
            <Skeleton variant="text" size="md" />
            <Skeleton variant="text" size="md" width="55%" />
            <Skeleton variant="circle" className="size-8" />
          </div>
        </div>
      </section>
    </div>
  )
}
