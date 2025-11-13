

export default function Navbar() {

    return (

        <div className="w-screen h-16 font-black text-amber-300 text-xs sm:text-base  lg:text-xl">

            <ul className="list-none w-full h-full flex justify-center items-center gap-8 ">
                <li>
                    Home
                </li>
                <li>
                    Character
                </li>
                <li>
                    Episodes
                </li>
            </ul>
        </div>
    )
}