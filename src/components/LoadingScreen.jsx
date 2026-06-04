export default function LoadingScreen({ loading }) {
  return (
    <div className={`loading-screen${loading ? '' : ' hidden'}`}>
      <div className="loading-logo">Portfolio</div>
      <div className="loading-bar-container">
        <div className="loading-bar"></div>
      </div>
    </div>
  )
}
