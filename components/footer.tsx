interface FooterProps {
    className?: string
  }
  
  const Footer = ({ className }: FooterProps) => {
    return (
      <footer className={`${className} w-full py-6 bg-background border-t`}>
        <p className="text-sm text-gray-400 text-center">
        Made with 💗 by Bhushan Bobade
      </p>
      </footer>
    )
  }
  
  export default Footer
  
  