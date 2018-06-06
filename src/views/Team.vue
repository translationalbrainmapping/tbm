<template>
  <transition name="fade-up" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
    <!-- Main team page content -->
    <div class="page">
      <div class="container">
        <CloseButton side="right" closeto="Home" color="primary" on="white" />

        <h1 class="big-title">Meet Our Team</h1>
        <h4>The program for translational brain mapping brings together clinicians and scientists at the University of Rochester committed to the vision of advancing patient care through personalized brain mapping.</h4>

        <div v-for="person in people" :key="person.name" @click="showPopup(person.name)" class="person small">
          <div class="img" :style="'background-image: url(\'/images/' + person.pic + '\');'">
            <div :class="[ 'triangle', 'big', 'white', person.big_triangle ]"></div>
            <div :class="[ 'triangle', 'small', 'white', person.small_triangle ]"></div>
          </div>
          <p class="name">{{ person.name }}</p>
        </div>
      </div>

      <!-- Person details popup -->
      <transition name="fade-down" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
        <div v-if="showingDetails" class="page person-popup">
          <div class="container">
            <a role="button" class="btn-close right primary" @click="closePopup">
              <font-awesome-icon :icon="icon" />
              <div class="bracket tl white"></div>
              <div class="bracket tr white"></div>
              <div class="bracket bl white"></div>
              <div class="bracket br white"></div>
            </a>

            <!-- Person details -->
            <div :class="[ 'person', detailPerson.side ]" style="margin-bottom: 10rem">
              <div class="info">
                <div class="img">
                  <img :src="'/images/' + detailPerson.pic" alt="Person's profile pic" />
                  <div :class="[ 'triangle', 'big', 'white', detailPerson.big_triangle ]"></div>
                  <div :class="[ 'triangle', 'small', 'white', detailPerson.small_triangle ]"></div>
                </div>
                <p class="name blk">{{ detailPerson.name }}</p>
                <p v-for="title in detailPerson.titles" v-html="title" class="title blk" style="margin-top: 0.5rem"></p>
                <div v-html="detailPerson.bio" class="description"></div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import { faTimes } from '@fortawesome/fontawesome-free-solid'
  import CloseButton from '@/components/CloseButton.vue'

  export default {
    name: 'Team',
    methods: {
      closePopup() {
        this.showingDetails = false
      },
      showPopup(person) {
        // find the person we clicked on
        for (let p of this.people) {
          if (p.name === person) {
            this.detailPerson = p
          }
        }

        this.showingDetails = true
      }
    },
    data() {
      return {
        icon: faTimes,
        detailPerson: {},
        showingDetails: false,
        people: [
          {
            'name': 'Webster H. Pilcher, MD, PhD',
            'pic': 'pilcher.jpg',
            'titles': [
              'Ernest & Thelma Del Monte Distinguished Professor of Neuromedicine',
              'Chairman of the Department of <a href="https://rochneuro.com/" target="_blank" rel="noopener">Neurosurgery</a>, University of Rochester'
            ],
            'bio': '<p>Dr. Pilcher’s clinical focus includes epilepsy surgery, brain tumors and general neurosurgery, with special emphasis on introaoperative awake mapping techniques to identify and protect critical language, sensory and motor functions.</p><p>Dr. Pilcher is a graduate of Colgate University and the University of Rochester Medical School where he received his MD/PhD. Following neurosurgery training at the University of Rochester, he was awarded the Charles A. Ellsberg fellowship to study epilepsy and brain tumor surgery with George Ojemann, MD, at the University of Washington in Seattle. In 1990, Dr. Pilcher joined the faculty at the University of Rochester, and was appointed to Chairman in 2002. As Chairman, Dr. Pilcher grew a small clinical service consisting of 5 neurosurgeons into a nationally recognized academic and clinical enterprise. Rochester Neurosurgery Partners now provides care in all health systems in Rochester and 10 regional clinics.</p>',
            'side': 'left',
            'big_triangle': 'tr',
            'small_triangle': 'bl'
          },
          {
            'name': 'Bradford Z. Mahon, PhD',
            'pic': 'mahon.jpg',
            'titles': [
              'Department of <a href="https://rochneuro.com/" target="_blank" rel="noopener">Neurosurgery</a>, University of Rochester',
              'Department of Psychology, Carnegie Mellon University'
            ],
            'bio': '<p>Dr. Mahon is a cognitive neuroscientist who studies how the brain recovers from injury. His research seeks to optimize techniques to map cognitive, language, sensory and motor functions in the brain. He specializes in using functional and structural MRI to map critical functions in brain tumor patients prior to surgery.</p><p>Dr. Mahon is a graduate of Harvard University (BS 2002, PhD 2009), and was on the faculty at the University of Rochester from 2011-2018. His current academic appointment is in the Department of Psychology at Carnegie Mellon University. He continues his work with the Translational Brain Mapping program and maintains a clinical research lab based at the Rochester Center for Brain Imaging, supported by funding from the National Science Foundation and the National Institute of Health.</p>',
            'side': 'right',
            'big_triangle': 'tl',
            'small_triangle': 'br'
          },
          {
            'name': 'Kevin Walter, MD',
            'pic': 'Kevin_Walter.jpg',
            'titles': [
              'Associate Professor of <a href="https://rochneuro.com/" target="_blank" rel="noopener">Neurosurgery</a> and Oncology at the University of Rochester Medical Center',
              'Chief of Neurosurgery at UR Medicine\'s Highland Hospital'
            ],
            'bio': '<p>Dr. Walter has special expertise in image guided neurosurgery, radiosurgery, and complex spinal surgery for tumors. He runs an active clinical research program that is involved in evaluating experimental therapeutics for patients with brain and spinal cancer. He is particularly interested in developing therapies that not only extend survival, but that also improve the quality of life for people afflicted with these diseases.</p><p>Dr. Walter is a graduate of Williams College (BA, 1990) and Johns Hopkins University (MD, 1995). He completed his neurosurgical residency training at Johns Hopkins University and Hospital, where he also completed a National Cancer Institute sponsored fellowship in neuro-oncology. Following completion of residency training he served on the faculty at the University of Pittsburgh, where he was named director of adult neuro-oncology, and was recruited to the University of Rochester in 2007.</p>',
            'side': 'left',
            'big_triangle': 'tr',
            'small_triangle': 'bl'
          },
          {
            'name': 'Yan Michael Li, MD, PhD',
            'pic': 'Yan_Michael_Li.jpg',
            'titles': [
              'Assistant Professor, Departments of <a href="https://www.urmc.rochester.edu/neurosurgery.aspx" target="_blank" rel="noopener">Neurosurgery</a> and Oncology'
            ],
            'bio': '<p>Dr. Li specializes in the treatment of brain tumors and complex spine diseases. He is currently studying the maximal safe resection of brain and spine tumor, and cancer-specific targeted therapy for brain and spine tumors.</p><p>Dr. Li received his medical degree from Peking Union Medical College and his PhD from University of Texas MD Anderson Cancer Center. He completed his neurosurgical residency and an enfolded complex spine fellowship at State University of New York, as well as fellowships at Dana Farber Cancer Center, Boston Children Hospital, Brigham and Women\'s Hospital Harvard Medical School, as well as the Neurosurgical Oncology fellowship at University of Texas MD Anderson Cancer Center.</p>',
            'side': 'right',
            'big_triangle': 'tl',
            'small_triangle': 'br'
          },
          {
            'name': 'George E. Vates, MD, PhD',
            'pic': 'G_E_Vates.jpg',
            'titles': [
              'Departments of <a href="https://www.urmc.rochester.edu/neurosurgery.aspx" target="_blank" rel="noopener">Neurosurgery</a>, <a href="https://www.urmc.rochester.edu/medicine.aspx" target="_blank" rel="noopener">Medicine</a>'
            ],
            'bio': '<p>Dr. Vates specializes in transsphenoidal pituitary surgery, skull base surgery, and management of subarachnoid aneurysms.</p><p>Dr. Vates graduated summa cum laude from Duke University, and obtained his medical degree from Cornell University Medical College. During medical training, he obtained a PhD in neuroscience from the Rockefeller University. After medical school, Dr. Vates’s resident training he specialized techniques of transsphenoidal pituitary surgery. Dr. Vates then completed a fellowship in cerebrovascular and skull base surgery at the Brigham and Women\'s Hospital, Harvard Medical School, and joined the faculty at the University of Rochester in 2004. As the neurosurgeon co-director of the University of Rochester Multidisciplinary Neuroendocrinology Clinic, Dr. Vates has established the clinic as a regional referral center for patients with pituitary tumors.</p>',
            'side': 'left',
            'big_triangle': 'tr',
            'small_triangle': 'bl'
          },
          {
            'name': 'Bogachan Sahin, MD, PhD',
            'pic': 'Bogachan_Sahin.jpg',
            'titles': [
              'Assistant Professor, Department of Neurology',
              'Chief of Neurology and Stroke Center Director at UR Medicine’s Highland Hospital',
              'Director of the Vascular Neurology Fellowship Program, University of Rochester'
            ],
            'bio': '<p>Dr. Sahin specializes in stroke in the young, cerebral vasculopathies, and hereditary stroke disorders. His research is focused on mechanisms of visual recovery in stroke survivors, occult atrial fibrillation as a cause of cryptogenic stroke, and carotid revascularization in asymptomatic carotid disease.</p><p>Dr. Sahin majored in molecular biology as an undergraduate at Princeton University. He completed his M.D. and Ph.D. training at the University of Texas Southwestern Medical Center at Dallas, where he studied motor learning, synaptic plasticity, and post-synaptic signal transduction. After completing his neurology residency and stroke fellowship at Johns Hopkins University, he joined the faculty of the Department of Neurology at the University of Rochester Medical Center in 2013.</p>',
            'side': 'right',
            'big_triangle': 'tl',
            'small_triangle': 'br'
          },
          {
            'name': 'Zoë Williams, MD',
            'pic': 'Zoe_Williams.jpg',
            'titles': [
              'Associate Professor, <a href="https://www.urmc.rochester.edu/eye-institute/patient-services-information/neuro-ophthalmology.aspx" target="_blank" rel="noopener">Ophthalmology</a>, Neurology and <a href="https://www.urmc.rochester.edu/neurosurgery.aspx" target="_blank" rel="noopener">Neurosurgery</a>'
            ],
            'bio': '<p>Dr. Williams’ research involves using MRI and optical coherence tomography to study resilience to degeneration in a range of diseases that affect site, with emphasis on pituitary tumors and strokes that affect the early visual system.</p><p>Dr. Williams obtained her undergraduate degree in Biology from Yale University, her Medical Degree at Wake Forest University School of Medicine, and completed her Residency in Ophthalmology at the University of Rochester. She then went on to complete a fellowship in Neuro-ophthalmology at the Wilmer Eye Institute, at Johns Hopkins University. She joined the faculty at Flaum Eye Institute at the University of Rochester Medical School in 2009.</p>',
            'side': 'left',
            'big_triangle': 'tr',
            'small_triangle': 'bl'
          },
          {
            'name': 'Colleen Schneider',
            'pic': 'Colleen_Schneider.jpg',
            'titles': [
              '<a href="https://www.urmc.rochester.edu/education/md/md-phd.aspx" target="_blank" rel="noopener">Medical Student Training Program</a> (MD/PhD Program)',
              '<a href="https://www.sas.rochester.edu/bcs/" target="_blank" rel="noopener">Brain and Cognitive Sciences</a>, University of Rochester'
            ],
            'bio': '<p>Colleen Schneider is a PhD student whose research seeks to understand the neural mechanisms through which vision recovers after stroke.</p>',
            'side': 'right',
            'big_triangle': 'tl',
            'small_triangle': 'br'
          },
          {
            'name': 'Adnan Hirad, PhD',
            'pic': 'Adnan_Hirad.jpg',
            'titles': [
              '<a href="https://www.urmc.rochester.edu/education/graduate/phd/translational-biomedical-science.aspx" target="_blank" rel="noopener">Translational Biomedical Science Program</a>',
              '<a href="https://www.urmc.rochester.edu/education/md/md-phd.aspx" target="_blank" rel="noopener">Medical Student Training Program</a> (MD/PhD Program)'
            ],
            'bio': '<p>Dr. Hirad’s research seeks to understand how subconcussive and concussive traumatic head injuries affect the brain. His work focuses on developing novel MRI-based assays of neurotrama associated with closed head injury.</p>',
            'side': 'left',
            'big_triangle': 'tr',
            'small_triangle': 'bl'
          },
          {
            'name': 'Gauri Patil',
            'pic': 'Gauri_Patil.jpg',
            'titles': [
              '<a href="https://www.sas.rochester.edu/bcs/" target="_blank" rel="noopener">Brain and Cognitive Sciences</a>, University of Rochester'
            ],
            'bio': '<p>Gauri Patil is an undergraduate student (BS, expected 2019) majoring in Brain and Cognitive Sciences. She is pre-admitted to the University of Rochester Medical School through the <a href="https://enrollment.rochester.edu/professional/rems/" target="_blank" rel="noopener">Rochester Early Medical Scholar’s program</a>.</p>',
            'side': 'right',
            'big_triangle': 'tl',
            'small_triangle': 'br'
          },
          {
            'name': 'Sam Haber, BS',
            'pic': 'Sam_Haber.jpg',
            'titles': [
              'Clinical Research Coordinator, Department of <a href="https://www.urmc.rochester.edu/neurosurgery.aspx" target="_blank" rel="noopener">Neurosurgery</a>'
            ],
            'bio': '<p>Sam Haber completed his BS in Brain and Cognitive Sciences at the University of Rochester (2018) and currently runs pre- and post-operative evaluations of brain tumor patients. He also assists in the operating room with cognitive testing during awake craniotomies to map critical language, sensory and motor functions.</p>',
            'side': 'left',
            'big_triangle': 'tr',
            'small_triangle': 'bl'
          },
          {
            'name': 'Emily Prentiss, BS',
            'pic': 'Emily_Prentiss.jpg',
            'titles': [
              'Clinical Research Coordinator, Department of <a href="https://www.urmc.rochester.edu/neurosurgery.aspx" target="_blank" rel="noopener">Neurosurgery</a>'
            ],
            'bio': '<p>Emily Prentiss completed her BS in Brain and Cognitive Sciences at the University of Rochester  (2016) and worked for two years as a laboratory technician with Drs. Mahon, Sahin and Williams before joining the Department of Neurology as a full time Clinical Research Coordinator.</p>',
            'side': 'right',
            'big_triangle': 'tl',
            'small_triangle': 'br'
          },
        ]
      }
    },
    components: {
      CloseButton,
      FontAwesomeIcon
    }
  }
</script>

<style lang="scss" scoped>
  .btn-close {
    cursor: pointer;
  }
</style>
