import classes from './Header.module.css'

const { HeaderFailure, HeaderSuccess } = classes

export interface HeaderProps {
    readonly name: string
    readonly age: number
}


const Header = ({name, age}: HeaderProps) => {

    const className = age < 18 
        ? HeaderFailure 
        : HeaderSuccess

    const isStartWith = (letter: string) => (word: string) =>  word
        .toLowerCase()
        .startsWith(letter)

    const headerStyle: React.CSSProperties = {
        color: age < 18 ? 'darkred' : 'darkgreen',
        border: `1px solid ${isStartWith('e')(name) ? 'blue' : 'purple'}`,
    }

    return (
        <div className={className}>
            <h1 style={headerStyle}>Hello {name}!</h1>
        </div>
    )
}

export default Header
