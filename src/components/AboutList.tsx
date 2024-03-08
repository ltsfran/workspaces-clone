'use client'
import DiamondIcon from '@/assets/diamond.svg'

const List: React.FC = () => {
  return (
    <ul className="w-full flex flex-wrap gap-5 text-neutral-700">
      <li className="flex items-center gap-3">
        <div className="flex flex-wrap text-xl">
          <DiamondIcon />
        </div>
        <span>
          Workspaces is a beautiful collection of desk setups from creative individuals that was created by{' '}
          <a
            href="https://twitter.com/rjgilbert"
            target="_blank"
            className="border-b-[1px] border-b-[#E5E5E5] transition-all hover:text-[#1E9751]"
          >
            Ryan Gilbert
          </a>
        </span>
      </li>
      <li className="flex items-center gap-3">
        <div className="flex flex-wrap text-xl">
          <DiamondIcon />
        </div>
        An interesting trend emerged as COVID-19 forced more and more companies into a WFH environment. An increasing number of tweets containing new desk setups began popping up daily. Workspaces was born to capture this inspiration in one place.
      </li>
      <li className="flex items-center gap-3">
        <div className="flex flex-wrap text-xl">
          <DiamondIcon />
        </div>
        More than 250 workspaces and counting have been shared since the first edition went out on April 5, 2020.
      </li>
      <li className="flex items-center gap-3">
        <div className="flex flex-wrap text-xl">
          <DiamondIcon />
        </div>
        Workspaces was acquired by Loops in mid-2022 and Ryan joined the team to continue bringing the inspiration to your inbox each and every week.
      </li>
    </ul>
  )
}

export default List
