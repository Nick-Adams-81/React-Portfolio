import React from "react"
import "./style.css"


function Link(props) {
    return (
        <div className="placeholder">
            <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9CAMAAAC4XpwXAAAAZlBMVEUAd7f///8AdbYAabH2+fxAhb0hfLnj7fXJ3OsAbbNEjcKnxt/7/P0eerhglsYzgbwAcbQAZa+StdZQkcSyy+J3o8zc6PLU4u4AYq7u9Pm40OXC1ug7iL8jd7ejwdxknMmHr9IAXazgz0C1AAADiUlEQVRoge2bW5ujIAyGJTgq1gOee27n///JtQc7VkOxdgj77Ppd9AbLqxFIiMRhN+3ywnNo5BV5cKc6198ylRKI4I4DUqblg+5WnA59vwFeuTe6mwhi9kXi5F7plQ14i68u9NIOvMVvW7pH/c47QcqcnbQEbx8+cHJ7dJk7hS3Dt6ZPHKoVDqNbZL8WOHCRHbaEwz5MD0C4/neSWbLdXP1AXe4zYj6vfPaj5otyNQSxY8/K6cwPccOGIvMFAMEIztiRCM9XCJyxE4ntIUHhLOIUdD5+6d3IMw+HUAFnNYHpZa6isy/zeIEN+JvO5k2fuUo6wZxfK+FsR0CPlPTAPD3b2Hx25XQnWWxfzLjQ/IyDQgXfUARZvFbQVxReTlYKOk2AMQpsbqLa8hywSRdkNPB2aznGB5SB3XDklZSbChDHvrPZnARtRC/ivIvom7Og32PLTCRVVYUZt7O/B5CUSbx/SZ9YDfp61TZulTxbr7mQfJ21v+/fhBTps/ojD7gzaO3NCcnj6hj49wDJrbd5Id6criKPBtpUDwDEgaoVhHduRpHZpkze4WMBRpR0HUjECUXXvJeEIx6WRU0xedYCYB6+C6chxULuiwMUhY+03LWaulSDh/US3DeR8IXR28iDq0Oyi/x02uPPo/PyJbzVNOvPon9r4YylU4w/h3486eHMP0zAz6Fv1bu//lUTbD+HPlEnPd4g3devuwbpE1IAJum+NvVkks4SnemN0rXbMaP0aG2TzvYa039E9+sgaHx19kW7HfyAvk1i3gqKo/oSU/RNwW9eHEAcVGm/2hC9eYqflB5X42pm0v34qVsARfpJ42dn0pOBSVXpZo2nmUcfJ/Mk/uo1S/08+tigigSQJus3i14jiZUMpW8N0LFFBM+9afKts+jYZ3SBfl7S5Jrn0F2sSzzpGvz+qMNeuwPosGt+n44OJUDDbAN0NGiwTEe/K/4ndNTy9euEjuFnH/jChb7QF/pCX+gLfaEv9IW+0Bf6Ql/oH9MdLNvTJXsU3+NQOnpgTLOLxLM91eMbNJYBxQ8aC+xGtaczxSjDG+WP/4A3Nk2O9wjhnENLINPwWYf+2QO5H7TGqoQAwPDSdMpJCBjqZesb/fxlB2hs1qx4VmuFCst1UhZrxGRgsz7Os1obWFqvi2RuYaUmNHG7eljig5NOrx621SomrgWOf2qBL9qdQzJ6eO6Oiv0BMD9FUYzbjtAAAAAASUVORK5CYII="
                alt="Responsive image">
            </img>
            <br></br>
            <br></br>
          
            
            <a href="https://www.linkedin.com/in/nick-adams-052093199/" className="btn btn-primary btn-lg active" role="button"
           aria-pressed="true">Nick's Linkedin</a>
           <br></br>
           <br></br>
           
         
           
            <img
                src="https://brian.works/_assets/images/social-stuff/github-cutout-dark-160x160.png"
                alt="Responsive image">
            </img>
            <br></br>
            <br></br>
           
           <a href="https://github.com/thebigdeal916" className="btn btn-primary btn-lg active" role="button"
           aria-pressed="true">Nick's Github</a>

        </div>

    )
}

export default Link;

