import HourlyWorkload from "../../../components/dialogueAnalytics_comps/charts/HourlyWorkload/Index";
import NewIssues from "../../../components/dialogueAnalytics_comps/charts/NewIssues/Index";
import OperatorsResonse from "../../../components/dialogueAnalytics_comps/charts/OperatorsResponse/Index";
import PostsNumber from "../../../components/dialogueAnalytics_comps/charts/PostsNumber/Index";
import ReslovedIssues from "../../../components/dialogueAnalytics_comps/charts/ResolvedIssues/Index";
import NavOptions from "../../../components/dialogueAnalytics_comps/NavOptions/Index";
import "./dialogueAnalytics.css"

const DialogueAnalytics = () => {
  return ( 
    <section className="sc-dialog">
         <div className="container">
            <div className="head-info">
               <h1>Аналитика диалогов</h1>
               <ul className="dialog-nav">
                   <li><a className="active" href="#">Общаяя статистика</a></li>
                   <li><a href="#">Операторы</a></li>
                   <li><a href="#">Провайдеры</a></li>
                   <li><a href="#">Качество поддержки</a></li>
                   <li><a href="#">Теги</a></li>
               </ul>
            </div>
           
            <div className="dialog-content">
               <NavOptions />
               <div className="chart-row">
                  <div className="lg-col-50 px-25">
                     <NewIssues />
                  </div>
                  <div className="lg-col-50 px-25">
                     <ReslovedIssues />
                  </div>
                  <div className="lg-col-50 px-25">
                     <HourlyWorkload />
                  </div>
                  <div className="lg-col-50 px-25">
                     <OperatorsResonse />
                  </div>
                  <div className="lg-col-50 px-25">
                     <PostsNumber />
                  </div>
               </div>
            </div>
         </div>
    </section>
   );
}
 
export default DialogueAnalytics;