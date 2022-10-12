        <!-- for drod down list -->
        
         <select className="ddlist">
            <option >{theTo}</option>
            <option className="option" value=''>Milimeter</option>
            <option className="option" value=''>Kilometer</option>
            <option className="option" value=''>Decimeter</option>
            <option className="option" value=''>Miles</option>
          </select>

@keyframes bounce {
	0%, 100%, 20%, 50%, 80% {
		-webkit-transform: translateY(0);
		-ms-transform:     translateY(0);
		transform:         translateY(0)
	}
	40% {
		-webkit-transform: translateY(-30px);
		-ms-transform:     translateY(-30px);
		transform:         translateY(-30px)
	}
	60% {
		-webkit-transform: translateY(-15px);
		-ms-transform:     translateY(-15px);
		transform:         translateY(-15px)
	}
}
input {  
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  animation-fill-mode: both;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: 1;
}
input:hover {
  animation-name: bounce;
  -moz-animation-name: bounce;
}