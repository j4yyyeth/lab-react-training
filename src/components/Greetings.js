const Greetings = ({lang, children}) => {

    let greetingSpan = "";

        switch(lang) {
            case "de":
                greetingSpan = "Hallo"
                break
    
            case "fr":
                greetingSpan = "Bonjour"
                break
    
            case "es":
                greetingSpan = "Hola"
                break
            case "en":
                greetingSpan = "Hello"
                break
    
            default:
            greetingSpan = 'Uknown language'
            break
        }

    return (
        <div id="greeting">
            <p>{greetingSpan} {children}</p>
        </div>
    )
}

export default Greetings;