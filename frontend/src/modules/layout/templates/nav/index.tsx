import CartButton from "@modules/layout/components/cart-button"
import Image from "next/image"
import styles from "./style.module.css"
import Link from "next/link"
import { AccountCircleOutlined } from "@mui/icons-material"

const SideMenuItems = {
  About: "/about",
  Store: "/store",
}
export default function Nav() {
  return (
    <div className={styles.styledHeader}>
      <Link href="/">
        <Image
          src="/DarkTitle.png"
          alt="Radiant Woods - Lamps and Decor"
          height={40}
          width={200}
        />
      </Link>
      <nav className={styles.styledNav}>
        {Object.entries(SideMenuItems).map(([name, href]) => {
          return (
            <Link key={name} href={href}>
              <button>{name}</button>
            </Link>
          )
        })}
        <Link href="/account">
          <AccountCircleOutlined />
        </Link>
        <CartButton />
      </nav>
    </div>
  )
}
