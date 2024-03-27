const Footer = () => {
    return <>
        <footer className="footer bg-secondary">
            <div className="container">
                <div className="footer-wrapper text-white">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="text-white" href="!#">Repo project</a>
                </div>
            </div>
        </footer>
    </>
}

export default Footer