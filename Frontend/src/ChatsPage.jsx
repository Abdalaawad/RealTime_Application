/* eslint-disable react/prop-types */
import { MultiChatSocket, MultiChatWindow,useMultiChatLogic} from "react-chat-engine-advanced";
const Chatpage = (props) => {
  // eslint-disable-next-line react/prop-types, react/prop-types
  const chatProps = useMultiChatLogic(`
  7f3b002f-476e-4124-a82a-58706163754a`,props.user.username, props.user.secret)
  return <div style={{height:`100vh`}}>
    <MultiChatSocket {...chatProps}/>
    <MultiChatWindow {...chatProps} style={{height:`100%`}} />
  </div>
};
export default Chatpage;
