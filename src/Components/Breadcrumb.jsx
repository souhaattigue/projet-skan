function Breadcrumb() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '14px',
      paddingTop:70,
      paddingLeft:70,
      fontFamily: 'Arial'    }}>
      <span style={{ color: "#9f9d9dff" }}>Home</span>
      <span >/</span>
      <span >404 Error</span>
    </div>
  );
}

export default Breadcrumb;