
import Link from 'next/link'

export default function Navigation() {
  return (
    <div>
        <nav className="border fixed split-nav">
            <div className="nav-brand">
                <h3><a href="/#">Patricias Kochbuch</a></h3>
            </div>

            <div class="collapsible">
                <input id="collapsible1" type="checkbox" name="collapsible1"></input>
                <label for="collapsible1">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
                </label>
                <div class="collapsible-body">
                <ul class="inline">
                <li>
                    <Link href="/" className="nav-link">
                        Startseite
                    </Link>
                </li>
                <li>
                    <Link href="/kontakt" className="nav-link">
                        Kontakt
                    </Link>
                </li>
                <li>
                    <Link href="/pullover" className="nav-link">
                        Pullover
                    </Link>
                </li>
                <li>
                    <Link href="/benutzer" className="nav-link">
                        Benutzer
                    </Link>
                </li>

                </ul>
                </div>
            </div>
        </nav>            
    </div>
  )
}
