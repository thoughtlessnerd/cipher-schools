import React, { useEffect, useState } from "react";
import "./css/MainNav.css";
import "./App.css";
import "./css/MainContent.css";
import Nav from "./components/Nav";
import Colors from "./constants/Colors";
import Icon from "./components/Icon";
import LabeledLogo from "./components/LabeledLogo";
import SearchBar from "./components/SearchBar";
import Tooltip from "./components/Tooltip";
import SideNav from "./ui/SideNav";
import ProfileHeader from "./ui/ProfileHeader";

function App() {
  const [user, setUser] = useState<any>({
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    points: 0,
    followers: [],
  });
  const [leftNavOpen, setLeftNavOpen] = useState<boolean>(false);
  // let [data, setData] = useState<string | null>(null);
  useEffect(() => {
    fetch(
      "http://localhost:8080/signin?email=abhay.csgo001@gmail.com&password=9231"
    )
      .then((res) => res.json())
      .then((json) => {
        // setData();
        getUserDetails(json[0].userID);
        // console.log(json);
      });
  }, []);

  const getUserDetails = (userID: number) => {
    fetch(`http://localhost:8080/getProfile?userID=${userID}`)
      .then((res) => res.json())
      .then((json) => {
        setUser(json[0]);
        console.log(json);
      });
  };

  return (
    <main>
      <Nav
        className="mainNav"
        start={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              gap: "1.5rem",
            }}
          >
            <Icon
              onClick={() => {
                setLeftNavOpen(!leftNavOpen);
                console.log("toggle");
              }}
              style={{ width: 21, height: 15 }}
              fill={Colors.black}
              icon="menu"
              className="mainNav-menu-logo"
              viewBox="0 0 28 20"
            />

            <LabeledLogo
              logo={
                <img
                  src="assets/images/logoLight.png"
                  className="mainNav-logo"
                />
              }
              labelClass="mainNav-logoLabel"
              label="CipherSchools"
            />

            <LabeledLogo
              className="mainNav-explore-logo"
              logo={
                <Icon
                  viewBox="0 0 27 27"
                  style={{
                    width: "1rem",
                    height: "1rem",
                  }}
                  icon="explore"
                  className="mainNav-explore-logo"
                />
              }
              label={
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  Browse
                  <Icon
                    icon="downArrow"
                    style={{ width: 10, height: 8 }}
                    viewBox="0 0 13 8"
                  ></Icon>
                </span>
              }
            />
          </div>
        }
        end={
          <div className="mainNav-actions">
            <SearchBar filterVisible />
            <span className="mainNav-actions-notification">
              <Tooltip text="Notifications" showOn="hover">
                <Icon
                  icon="bell"
                  style={{ width: 15, height: 19 }}
                  viewBox="0 0 20 25"
                />
              </Tooltip>
            </span>
            <span className="mainNav-actions-profile">
              <Tooltip
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "2rem",
                  height: "2rem",
                  backgroundColor: Colors.primary,
                  borderRadius: "50%",
                }}
                text={user.firstName + " " + user.lastName}
                showOn="hover"
              >
                <Icon
                  icon="defaultUser"
                  fill="#fff"
                  style={{ width: 20, height: 20 }}
                  viewBox="0 0 24 24"
                />
              </Tooltip>
            </span>
            <span className="mainNav-actions-points">
              <Tooltip text={"CipherPoint: " + user.points} showOn="hover">
                <LabeledLogo
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    justifyContent: "center",
                  }}
                  logo={
                    <img
                      style={{ width: "1.5rem", height: "1.5rem" }}
                      src="assets/images/points.png"
                      alt="points"
                    />
                  }
                  label={user.points}
                  labelClass="mainNav-actions-points-label"
                />
              </Tooltip>
            </span>
          </div>
        }
        direction="row"
      />
      <div className="mainContent">
        <SideNav open={leftNavOpen} />
        <div className="mainContent-content">
          <ProfileHeader user={user} />
          <div className="mainContent-content-body">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse unde
            labore, vitae doloremque laudantium fugiat quo doloribus corporis
            repellat mollitia illo? Ullam harum laborum eius voluptates, dolorum
            earum provident deleniti voluptate fuga modi! Culpa quia soluta
            commodi fugit ullam explicabo cupiditate optio maxime inventore
            omnis, temporibus et distinctio velit veniam harum adipisci
            perspiciatis ab ipsa impedit at repellendus voluptas. Necessitatibus
            explicabo voluptates exercitationem eligendi ipsum dicta ipsa
            accusamus impedit in et est eveniet quia, nemo porro ea saepe esse
            inventore consequatur. Sint ex repellat, temporibus inventore
            aliquam vel nesciunt eum neque libero eveniet expedita cumque
            tempore, eaque velit natus et quam. Deleniti iste quae veritatis
            non, ipsa hic unde qui itaque quos velit dolorem quasi nihil odit
            pariatur quidem sint nemo dolore est? Fugit suscipit et ea officia
            dolorum deleniti sapiente. Illo sint eius explicabo iusto
            perspiciatis dolore provident alias quidem odio corporis ullam nemo
            animi reiciendis voluptatibus minus accusamus quaerat quos doloribus
            eos, saepe rem! Modi officia quisquam ab a exercitationem iste aut
            alias porro consequatur in dignissimos rerum dolorum hic sequi earum
            voluptate voluptatum vero sed, voluptas inventore quidem. Sapiente
            ipsa officiis similique facilis, accusantium mollitia neque
            repellendus odit placeat quo voluptatibus accusamus, tempore iusto
            assumenda nam sequi enim porro deleniti dicta. Dolorem placeat
            consectetur ad minima cum minus quia quis. Illum adipisci maxime
            ullam quidem reiciendis enim quisquam, eius dolorem quos dolorum
            voluptatum nobis neque quam ipsum iste, deleniti magnam
            reprehenderit tempore cupiditate! Officia a cumque vitae hic unde
            quibusdam inventore vero tenetur quod, fugiat ipsa, odio quas
            accusantium blanditiis ad architecto deleniti, soluta nesciunt
            necessitatibus. Porro asperiores vitae libero quisquam non doloribus
            eum cumque reprehenderit impedit commodi itaque temporibus dolor
            debitis, totam, numquam molestias magnam! Consequuntur ipsam dolorem
            quisquam quidem recusandae, tempora reiciendis temporibus quaerat
            corporis libero. Perferendis perspiciatis voluptate aliquid
            reprehenderit ipsam, cum quia doloremque blanditiis quod libero amet
            quos architecto, iure fugit est dolore! Eligendi doloremque rerum
            labore saepe? A ab inventore dicta deleniti! Enim, recusandae esse.
            Aut maxime sed dolorem natus illo recusandae! Obcaecati eum,
            pariatur itaque similique totam repellendus facere minima
            necessitatibus dolor vitae in, placeat architecto quo molestias quas
            explicabo expedita. Autem minima nobis voluptate iure enim nisi
            beatae, atque necessitatibus dicta asperiores veritatis distinctio,
            nesciunt cumque. Illum, enim eum, voluptatem, quos deserunt
            voluptatum impedit porro magnam eaque quod quisquam assumenda
            laborum ex corporis ullam! At vero rerum quos sapiente,
            necessitatibus repudiandae fugit enim eaque ratione nesciunt facilis
            ex. Possimus, quae voluptatibus omnis nemo incidunt quasi
            consequatur voluptas. Itaque, magni non. Rerum maxime reprehenderit
            quam labore temporibus minus, dolore odio incidunt cupiditate
            tenetur quis accusantium sed corrupti, iure quaerat soluta
            distinctio eligendi magnam, tempore quidem? Voluptate sit nemo amet
            deserunt perferendis optio voluptatum quasi excepturi molestiae
            natus inventore explicabo quos quis, qui ut alias dolorem ipsam
            quidem nihil consequatur. Numquam reprehenderit quaerat ad eveniet
            consequatur molestias quos mollitia minima at assumenda, totam,
            perspiciatis omnis? Dicta magnam recusandae quidem fugit dolor
            inventore dignissimos, ut facere architecto aut eaque, explicabo
            veniam corporis dolorem quisquam, qui atque amet magni sed ea! Magni
            nulla laborum sed nisi voluptate, facere, atque aliquam libero
            officiis molestias beatae fugiat dolor quidem. Nemo repudiandae
            libero magni. Perspiciatis ad dolore eaque necessitatibus illo ex
            laborum, ullam laudantium exercitationem voluptatum delectus, quia
            molestiae tempore, excepturi perferendis! Tenetur dolorum, assumenda
            saepe temporibus eveniet sint ipsum esse adipisci? Ea laudantium
            aspernatur incidunt delectus, perspiciatis blanditiis odit molestiae
            similique repellat, possimus eaque maiores quidem natus. Soluta
            exercitationem dolor totam ipsa adipisci impedit veritatis iste
            tenetur! Unde perferendis aliquam ab nisi asperiores temporibus
            impedit ut odio? Est, architecto voluptatem asperiores quasi sunt
            voluptate quod molestiae id unde, perferendis magnam laborum quos
            dignissimos repellendus recusandae veniam qui eos earum ratione.
            Consequatur magnam minus quas nihil omnis, asperiores dolore.
            Officiis commodi voluptatum vitae! Aut, sed laboriosam! Pariatur,
            recusandae. Doloribus, maxime ipsam. Fugit itaque illo quae dolores
            rerum pariatur nesciunt nemo omnis, corporis placeat! Eaque,
            consequuntur. Facilis esse voluptatibus sunt natus voluptas deleniti
            consequatur earum vel accusantium nobis officiis nemo repudiandae
            voluptatum sapiente cupiditate porro, sint recusandae ipsum mollitia
            dolores amet dignissimos vero consequuntur temporibus. Cum ipsa
            dolorum repudiandae odio qui blanditiis, fuga quasi fugit dicta
            voluptas dolore quaerat voluptate inventore rem accusamus veniam
            tenetur ea accusantium animi quisquam. Recusandae necessitatibus
            autem officiis, et harum omnis eius ducimus inventore voluptas
            voluptatibus similique odit optio rem perspiciatis praesentium,
            atque vel nobis aspernatur temporibus debitis error deleniti? Neque
            inventore optio corporis cumque veniam. Repudiandae est placeat
            accusantium, deserunt necessitatibus dicta velit dolorem quos id
            alias. Nesciunt nam quas, exercitationem natus ratione possimus
            deserunt fugiat perferendis fuga odio est repellendus sint excepturi
            quos labore, itaque tempore. Inventore ut quos porro molestias hic
            pariatur, blanditiis provident eum consequuntur numquam quaerat
            atque labore distinctio. Nihil officia sapiente maiores in. Nostrum
            rerum porro laborum placeat harum provident optio nemo alias facere
            quo commodi deserunt magni reiciendis velit adipisci sequi
            molestiae, sed iure. Tempore, corporis blanditiis reprehenderit
            molestiae inventore laboriosam minima et! Assumenda explicabo qui
            ea, nostrum enim aspernatur quae dicta in praesentium laboriosam
            laudantium quam, optio voluptate corporis, error quisquam culpa?
            Magnam impedit, neque consequuntur libero, cupiditate culpa
            possimus, earum hic debitis eveniet aut exercitationem consectetur.
            Maiores dolores fugit saepe magnam distinctio, nesciunt, reiciendis
            sint odit aperiam earum nam repellat blanditiis ipsum facilis
            repudiandae perferendis incidunt consequuntur animi. Labore
            repudiandae, odit nostrum hic voluptatibus veritatis aut repellat
            facere officia dolor harum esse nam nemo non accusantium minus
            quibusdam culpa soluta quo velit ea consequatur! Ducimus, numquam
            porro illum perspiciatis nulla eius, blanditiis veniam voluptas
            magni culpa maiores fugiat tempora dolor. Eveniet, alias cupiditate
            minus debitis consectetur modi optio incidunt, cumque quod, nihil
            necessitatibus quis voluptates molestias accusamus corrupti aliquam
            harum perferendis facilis earum illo iste velit reprehenderit
            minima! Nihil porro amet voluptate ratione repellendus autem quam
            alias debitis maiores doloribus, hic, consequuntur quos temporibus
            necessitatibus a quidem sed tenetur? Consequatur error perspiciatis
            aliquam quibusdam minus eligendi deleniti itaque ducimus veritatis,
            doloremque sint necessitatibus, distinctio tempore vitae optio! Quo
            soluta cum eius harum, ab inventore eaque atque blanditiis nisi
            consequuntur! Fuga culpa minus ipsum, vero pariatur aperiam a
            tenetur labore odio aliquid libero possimus dignissimos? Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Maiores possimus
            nesciunt fuga doloremque dignissimos aliquam id exercitationem
            suscipit atque facilis nemo ea dolorum sapiente quaerat, unde
            blanditiis ad aut veritatis neque assumenda earum velit architecto?
            Reiciendis dolores, id sit eum officia aut facilis, autem odit,
            natus sapiente quidem earum. Commodi culpa molestias quod enim
            laboriosam, amet nostrum animi nisi cupiditate! Ipsum repellendus
            suscipit autem fugiat amet sint minus officiis praesentium dolorum.
            Accusantium aliquam sint ipsam, earum animi repellendus aut nulla
            enim fugit exercitationem obcaecati quae! Doloribus, quia, quae
            incidunt aperiam doloremque excepturi accusantium quos repudiandae
            modi aspernatur totam mollitia nobis. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Placeat, temporibus cumque accusantium
            autem quam accusamus perspiciatis sapiente quaerat odit nemo.
            Obcaecati, ratione voluptatem minus officia unde optio dolor
            dolores, molestiae adipisci repellendus quisquam eos? Fuga ea ex
            blanditiis suscipit molestias nesciunt quod quo, doloribus fugiat.
            Ducimus accusamus illum, quibusdam nesciunt cumque necessitatibus ab
            aliquam corrupti magni accusantium ea laborum debitis deleniti iure
            corporis error nisi officiis ut, amet reiciendis assumenda eos
            sapiente! Aliquid consequatur recusandae modi itaque natus? Quod,
            illo quos vitae nemo magnam error suscipit consequuntur aliquid
            saepe quis fugit? Architecto doloremque natus fuga, exercitationem
            nulla laboriosam perspiciatis. Magnam temporibus optio ipsa non
            asperiores dicta ea, error minus cupiditate placeat eum expedita
            doloremque tempore dolorum odit aut? Accusamus ipsam iste porro
            culpa quod eius error modi amet reiciendis iusto? Aut veritatis,
            iure ad odit minus omnis. Praesentium quod, doloremque eius
            cupiditate nobis consequatur? Provident architecto fugiat iste
            sapiente, ad exercitationem sit culpa sunt? Consequatur voluptatibus
            ipsam officiis? Neque, vel? Labore distinctio aperiam suscipit
            quaerat dolorum perspiciatis omnis. Harum nostrum labore delectus,
            vero nesciunt earum sequi soluta numquam aliquid cupiditate velit
            veniam non perferendis debitis rem laudantium officiis itaque
            reiciendis? Libero cum nulla ipsam hic eius, qui perspiciatis vel
            voluptatem. In expedita id modi, eaque hic molestiae ea minus optio
            blanditiis porro doloremque reprehenderit totam illo amet dolor quae
            necessitatibus eum non fugiat pariatur corrupti, perferendis iusto
            officiis odio! Alias recusandae natus sit expedita. Velit dolor at
            ipsum necessitatibus rem consequatur fugit sit? Voluptatum, magni
            sequi. Perferendis dolores neque voluptas ratione, ipsam veritatis
            similique porro laborum eum qui excepturi quia magnam dignissimos
            aliquid quis dolor quae? Laudantium enim distinctio, labore quidem
            blanditiis, nihil repellat rerum natus harum quis inventore! Odit
            numquam odio sequi repellat obcaecati nihil. Ducimus dicta earum at
            quibusdam repellendus in, voluptate temporibus odio eveniet
            provident ab ipsa! Vero placeat veritatis earum, blanditiis dolorum
            temporibus quidem porro tenetur pariatur hic nostrum vel nisi vitae,
            beatae molestiae? Explicabo, quis, veniam vel perferendis esse quae
            est perspiciatis illo sint laboriosam repellat, quaerat vero
            architecto porro dicta odio voluptatum consequuntur quia? Vitae,
            labore illum. Magni, doloremque illum ducimus provident rerum est a
            voluptates quisquam quasi distinctio maxime dolores reprehenderit.
            Harum nobis deleniti eos nam numquam quibusdam asperiores doloremque
            placeat sequi voluptatum distinctio eius sunt obcaecati, reiciendis
            quo magnam unde animi, facilis aspernatur doloribus nemo. Laudantium
            corporis, excepturi, quos explicabo voluptatibus similique culpa
            nostrum, maiores dolores nulla est totam in architecto. Eligendi
            itaque sint exercitationem neque asperiores, debitis sequi cumque
            soluta commodi aliquid aliquam ut recusandae temporibus.
            Reprehenderit, veniam facere accusamus atque, nam enim rerum
            voluptas commodi facilis tenetur dicta. Eius, quam error obcaecati
            pariatur culpa molestias laborum est reiciendis corporis vitae neque
            dolore cupiditate alias, quisquam accusantium, rerum dolorem
            aperiam! Sint animi ipsa soluta obcaecati? Numquam enim a autem
            nulla repellendus iure iusto amet aliquam atque, accusantium dicta
            cupiditate impedit dolores recusandae labore corrupti et error
            nostrum. Sit harum itaque veniam officia molestias? Rem fuga dolorem
            velit perspiciatis voluptatibus doloremque commodi, illum aut
            ratione illo recusandae, ea ipsa mollitia voluptas corporis.
            Reiciendis deleniti pariatur eius in quaerat facere molestiae velit
            eligendi. A reiciendis, magni quibusdam aliquid nesciunt officia
            dolorum et eius explicabo minus nobis nulla ullam saepe quaerat
            molestiae illum hic earum omnis vitae quas. Quam, reprehenderit
            possimus quaerat pariatur voluptate porro sed, iure placeat sunt
            expedita eos velit inventore adipisci! Odit similique exercitationem
            maxime delectus qui, ex repellendus reprehenderit cum, voluptatibus
            sit autem veritatis minima dolore blanditiis asperiores sed
            aspernatur aliquid iusto! Quia ipsum quis possimus minima rem
            accusamus sit earum. Culpa modi nesciunt excepturi atque cupiditate
            dolor obcaecati illum quam similique, eligendi natus quibusdam
            soluta ipsa distinctio officia a enim ullam possimus blanditiis
            magnam sequi! Repellendus ipsum, pariatur natus explicabo, neque nam
            vitae inventore aperiam quasi quos cumque incidunt at odit
            provident! Quos labore eos impedit reprehenderit. Libero ratione
            inventore ad nobis porro modi fuga molestias, placeat delectus odit
            minima officiis necessitatibus animi voluptatem, quo ut quasi
            adipisci pariatur. Rem explicabo soluta eligendi ex, sapiente harum
            quo! Aperiam exercitationem, similique libero earum animi dolores
            quisquam ab itaque cupiditate neque, voluptatibus quasi amet eaque.
            Cumque voluptatum obcaecati quam voluptate at quibusdam soluta ullam
            omnis, ratione nisi, alias saepe nam ipsam architecto ipsa ducimus
            facere necessitatibus? Quibusdam in tempora quae suscipit harum
            similique cum deleniti, sint accusantium iusto, neque quisquam
            accusamus earum quia, eos fugiat nobis saepe vero illo ad? Possimus,
            voluptatem! Perspiciatis, architecto. Dicta vero ducimus incidunt,
            excepturi dolore accusantium reprehenderit omnis? Quasi obcaecati
            quos minus aperiam iusto ea magni provident facere mollitia, aliquid
            veniam dolores distinctio? Corporis dolores laudantium quis atque
            tenetur repellendus temporibus culpa quibusdam maiores. Perferendis
            necessitatibus corporis possimus quia sint aperiam assumenda debitis
            temporibus consequatur a, velit dolores esse odio voluptate vel enim
            soluta officia illo similique repellat ipsa expedita. Rerum culpa
            nemo natus reiciendis quis ullam voluptates non, ipsum libero
            architecto eligendi voluptatum, corporis rem quia sequi odit
            accusamus obcaecati, quisquam eius. Consequatur impedit magnam
            fugiat tempora sequi distinctio sapiente enim similique deleniti
            deserunt ut minima excepturi rerum nemo placeat optio inventore
            porro pariatur, atque iste, quae, facere laudantium! Voluptate nihil
            in velit odio labore explicabo, dolore amet, quaerat iusto, nobis
            saepe omnis ipsa. Sequi porro nihil architecto ullam corrupti fugit
            iusto? Eos quasi quae modi corporis facere, mollitia rem
            perspiciatis delectus aliquam iste laborum, quis optio! Vitae dolore
            beatae enim libero autem possimus reprehenderit, commodi est nisi
            dignissimos voluptatum, corporis aliquam. Minus deserunt nisi alias,
            incidunt quo nemo nobis nesciunt laboriosam assumenda natus placeat
            unde asperiores iure maiores delectus, aliquam ullam? Omnis,
            assumenda? Harum eaque, ratione provident ad beatae voluptates odit
            aspernatur asperiores, laboriosam, aliquid similique repellendus
            illum. A in saepe qui, placeat, delectus exercitationem provident
            earum libero non velit nulla eos! Libero, illo? Sint hic pariatur
            minima accusantium ut molestiae, facilis nihil quas sequi corporis
            assumenda, alias, perspiciatis enim? Esse ipsum est commodi aperiam
            ab adipisci praesentium enim sint dolorem culpa ad nihil eum quos et
            voluptatem molestias, mollitia dolor! Magnam cum veniam delectus,
            omnis aliquam unde nulla corporis error quae rem mollitia asperiores
            distinctio iusto nihil molestias maiores minima adipisci dolores
            officia?
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
