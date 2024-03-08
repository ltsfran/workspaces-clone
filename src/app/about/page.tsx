import AboutList from '@/components/AboutList'

export default function Home () {
  return (
    <div className="w-full px-4 md:px-6">
      <div className="w-full max-w-3xl mx-auto box-border rounded-lg py-8 min-[480px]:outline min-[480px]:outline-1 min-[480px]:outline-offset-0 min-[480px]:outline-neutral-200 min-[480px]:shadow-md min-[480px]:bg-white min-[480px]:my-8 min-[480px]:p-8 md:my-16">
        <h2 className="text-2xl font-switzer w-full text-center mb-6">
          A short story behind workspaces...
        </h2>
        <AboutList />
      </div>
    </div>
  )
}
