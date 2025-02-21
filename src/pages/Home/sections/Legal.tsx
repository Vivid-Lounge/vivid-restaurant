import { Box, Container, Typography } from '@mui/material'
import About from '../../../shared/images/hero-restaurant.png'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
const LegalPage = () => {
	const location = useLocation().pathname
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [location])
	return (
		<Box
			sx={{
				background: `url(${About})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				color: 'white',
				backdropFilter: 'blur(5px)',
				minHeight: '100vh',
				py: { xs: 4, md: 8 },
				textAlign: 'center',
			}}
		>
			<Container maxWidth='lg'>
				<Typography
					variant='h2'
					sx={{
						color: 'secondary.main',
						fontFamily: 'Carattere, serif',
						mb: 2,
						textAlign: 'center',
					}}
				>
					Legal
				</Typography>

				<Box sx={{ maxWidth: '800px', mx: 'auto' }}>
					{/* Section 1 */}
					<Typography
						variant='h5'
						sx={{ color: 'secondary.main', mb: 2, mt: 4 }}
					>
						1. Informații generale
					</Typography>
					<Typography sx={{ mb: 3, lineHeight: 1.8 }}>
						Confidențialitatea vizitatorilor site-ului
						www.restaurant.vividlonge.ro este foarte importantă
						pentru noi și suntem angajați în a ne proteja
						vizitatorii. Acest document are rolul de a vă informa cu
						privire la prelucrarea datelor dumneavoastră cu caracter
						personal, în contextul utilizării site-ului
						www.restaurant.vividlonge.ro. Intenția noastră este de a
						vă oferi o experiență online sigură și ne asigurăm că
						informațiile introduse de dvs. în baza noastră de date
						sunt utilizate exclusiv în scopurile gândite de dvs.
					</Typography>
					<Typography sx={{ mb: 3, lineHeight: 1.8 }}>
						Conform cerințelor Regulamentului (UE) 2016/679 privind
						protecția persoanelor în ceea ce privește prelucrarea
						datelor cu caracter personal și privind libera
						circulație a acestor date și de abrogare a Directivei
						95/46/CE (în continuare denumit „Regulamentul GDPR")
						aplicabil din data de 25 mai 2018, avem obligația de a
						administra în condiții de siguranță, numai pentru
						scopurile specificate, datele personale pe care ni le
						furnizați prin utilizarea site-ului nostru în acord cu
						prevederile Regulamentului GDPR.
					</Typography>

					{/* Section 2 */}
					<Typography
						variant='h5'
						sx={{ color: 'secondary.main', mb: 2, mt: 4 }}
					>
						2. Ce date personale colectăm de la dvs.?
					</Typography>
					<Typography sx={{ mb: 3, lineHeight: 1.8 }}>
						Când ne scrieți folosind formularul „Rezervări" sau
						„Evenimente private" de pe site-ul nostru, vă cerem să
						ne furnizați datele de contact precum: nume, prenume și
						adresa de mail pentru a putea lua legătura cu dvs.
					</Typography>
					<Typography sx={{ mb: 3, lineHeight: 1.8 }}>
						De asemenea site-ul www.restaurant.vividlonge.ro poate
						colecta, stoca și utiliza informații despre computerul
						dvs., inclusiv adresa dvs. de IP, locația geografică,
						tipul și versiunea browserului și sistemul de operare,
						informații despre vizitele dvs. în site și utilizarea
						acestuia, inclusiv sursa de referință, durata vizitei,
						vizualizările de pagini și căile de navigare ale
						site-ului sau orice alte informații personale pe care ni
						le trimiteți.
					</Typography>

					{/* Section 3 */}
					<Typography
						variant='h5'
						sx={{ color: 'secondary.main', mb: 2, mt: 4 }}
					>
						3. Pentru ce se folosesc datele personale colectate?
					</Typography>
					<Typography sx={{ mb: 3, lineHeight: 1.8 }}>
						Accesând formularul „Rezervări" sau „Evenimente private"
						de pe site-ul www.restaurant.vividlonge.ro se presupune
						că sunteți interesat de serviciile oferite de
						restaurantul nostru.
					</Typography>
					<Typography sx={{ mb: 3, lineHeight: 1.8 }}>
						Datele personale transmise prin intermediul acestui site
						și datele personale pe care le-am colectat de la dvs.,
						de la terți sau din surse publice vor fi utilizate
						pentru a vă furniza informațiile solicitate și pentru a
						vă contacta în vederea unei viitoare colaborări.
					</Typography>
					<Typography sx={{ mb: 3, lineHeight: 1.8 }}>
						De asemenea, putem folosi datele dvs. pentru activități
						de marketing, respectiv pentru transmiterea prin
						intermediul mijloacelor de comunicare la distanță
						(e-mail, sms) de comunicări comerciale privind produsele
						și serviciile oferite de www.restaurant.vividlonge.ro.
					</Typography>

					{/* Section 4 */}
					<Typography
						variant='h5'
						sx={{ color: 'secondary.main', mb: 2, mt: 4 }}
					>
						4. Dezvăluirea și transferul datelor cu caracter
						personal
					</Typography>
					<Typography sx={{ mb: 3, lineHeight: 1.8 }}>
						www.restaurant.vividlonge.ro minimizează riscul pentru
						drepturile și libertățile dvs. prin faptul că nu
						colectează sau stochează informații sensibile despre
						dvs.
					</Typography>
					<Typography sx={{ mb: 3, lineHeight: 1.8 }}>
						În măsura permisă de legile aplicabile în materie de
						protecție a datelor, putem divulga datele dvs. personale
						doar unui membru al echipei/angajat în măsura în care
						acest lucru este în mod rezonabil necesar pentru
						scopurile stabilite sau în măsura în care suntem
						obligați să facem acest lucru prin lege.
					</Typography>

					{/* Section 5 */}
					<Typography
						variant='h5'
						sx={{ color: 'secondary.main', mb: 2, mt: 4 }}
					>
						5. Cookie-uri
					</Typography>
					<Typography sx={{ mb: 3, lineHeight: 1.8 }}>
						Cookie-ul este un fișier de mici dimensiuni, format din
						litere și numere, care va fi stocat pe computerul,
						terminalul mobil sau alte echipamente ale unui
						utilizator de pe care se accesează internetul.
					</Typography>
					<Typography sx={{ mb: 3, lineHeight: 1.8 }}>
						Cookie-ul este instalat prin solicitarea emisă de către
						un web-server unui browser (ex: Internet Explorer,
						Chrome) și este complet „pasiv" (NU conține programe
						software, viruși sau spyware și NU poate accesa
						informațiile de pe hard driverul utilizatorului).
					</Typography>

					{/* Subsections */}
					<Typography
						variant='h6'
						sx={{ color: 'secondary.main', mb: 2, mt: 3 }}
					>
						5.1. Care este durata de viață a unui cookie?
					</Typography>
					<Typography sx={{ mb: 3, lineHeight: 1.8 }}>
						Durata de viață a unui cookie poate fi diferită în
						funcție de scopul pentru care este plasat. Există
						cookie-uri folosite exclusiv pentru o singură sesiune –
						acestea nu mai sunt reținute după ce utilizatorul iese
						de pe website. Cookie-uri permanente – sunt reținute și
						refolosite de fiecare dată când utilizatorul revine pe
						acel website, însă pot fi șterse oricând de utilizator.
					</Typography>

					<Typography
						variant='h6'
						sx={{ color: 'secondary.main', mb: 2, mt: 3 }}
					>
						5.2. Cum poți controla cookie-urile?
					</Typography>
					<Typography sx={{ mb: 3, lineHeight: 1.8 }}>
						Poţi controla şi/sau şterge cookie-urile după cum doriți
						– pentru detalii, consulți site-ul aboutcookies.org.
						Puteți șterge toate cookie-urile din calculator și
						puteți seta majoritatea browserelor să blocheze plasarea
						acestora. Dacă faceți acest lucru, este posibil să fiți
						nevoit să setați manual unele preferinţe, de fiecare
						dată când vizitați site-ul.
					</Typography>

					{/* Remaining sections */}
					<Typography
						variant='h5'
						sx={{ color: 'secondary.main', mb: 2, mt: 4 }}
					>
						6. Securitatea informațiilor dvs. personale
					</Typography>
					<Typography sx={{ mb: 3, lineHeight: 1.8 }}>
						Pentru a vă proteja confidențialitatea datelor și a
						informațiilor personale pe care le transmiteți prin
						utilizarea acestui site web, vom lua măsuri de precauție
						tehnice și organizatorice rezonabile pentru a preveni
						pierderea, folosirea necorespunzătoare sau modificarea
						informațiilor dvs. personale.
					</Typography>

					<Typography
						variant='h5'
						sx={{ color: 'secondary.main', mb: 2, mt: 4 }}
					>
						7. Drepturile de care beneficiați
					</Typography>
					<Typography sx={{ mb: 3, lineHeight: 1.8 }}>
						Regulamentul GDPR oferă anumite drepturi persoanelor
						vizate, cum ar fi:
					</Typography>
					<Box component='ul' sx={{ mb: 3, pl: 4 }}>
						<Typography
							component='li'
							sx={{ mb: 2, lineHeight: 1.8 }}
						>
							posibilitatea să obțineți de la companie, la cerere
							și în mod gratuit, confirmarea că datele
							dumneavoastră cu caracter personal sunt procesate de
							către noi, precum și detalii în legătură cu această
							procesare.
						</Typography>
						<Typography
							component='li'
							sx={{ mb: 2, lineHeight: 1.8 }}
						>
							dreptul de a vă opune în orice moment, din motive
							întemeiate și legitime legate de situația
							dumneavoastră particulară, la prelucrarea datelor
							dumneavoastră cu caracter personal.
						</Typography>
						<Typography
							component='li'
							sx={{ mb: 2, lineHeight: 1.8 }}
						>
							dreptul de a vă opune în mod gratuit și fără nicio
							justificare la procesarea datelor dumneavoastră cu
							caracter personal pentru marketing direct.
						</Typography>
					</Box>

					<Typography
						variant='h5'
						sx={{ color: 'secondary.main', mb: 2, mt: 4 }}
					>
						8. Modificări ale politicii privind confidențialitatea
					</Typography>
					<Typography sx={{ mb: 3, lineHeight: 1.8 }}>
						Este posibil să actualizăm uneori acest document de
						informare prin publicarea unei noi versiuni pe acest
						site web. Ne rezervăm dreptul de a modifica în orice
						moment, din orice motiv și fără notificare acest
						document de informare.
					</Typography>

					<Typography
						variant='h5'
						sx={{ color: 'secondary.main', mb: 2, mt: 4 }}
					>
						9. Întrebări, nelămuriri, reclamații
					</Typography>
					<Typography sx={{ mb: 3, lineHeight: 1.8 }}>
						În măsura în care aveți orice îngrijorare cu privire la
						confidențialitatea datelor dumneavoastră cu caracter
						personal pe care le procesăm, sau doriți să efectuați o
						reclamație legată de confidențialitate, vă rugăm să ne
						transmiteți un e-mail la adresa vividlounge@gmail.com.
					</Typography>
				</Box>
			</Container>
		</Box>
	)
}

export default LegalPage
