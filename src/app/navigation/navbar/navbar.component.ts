import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  message: string = "User, not connected.";;
  auth: AuthenticationService;
  username: string;
  password: string; 
  firstname: string = "David";
  lastname: string = "Sayag";

  @Output() closeSideNav = new EventEmitter();
  isXsmallScreen: boolean = false;
  isSmallScreen: boolean = false;
  isMediumScreen: boolean = false;
  isLargeScreen: boolean = false;
  isXlargeScreen: boolean = false;
  isHandsetScreen: boolean = false;
  isTabletScreen: boolean = false;
  isWebScreen: boolean = false;
  isHandsetPortraitScreen: boolean = false;
  isTabletPortraitScreen: boolean = false;
  isWebPortraitScreen: boolean = false;
  isHandsetLandscapeScreen: boolean = false;
  isTabletLandscapeScreen: boolean = false;
  isWebLandscapeScreen: boolean = false;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    
    private breakpointObserver: BreakpointObserver
    ) {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
  /*Breakpoints.Medium,
    Breakpoints.Large,
    Breakpoints.XLarge,
    Breakpoints.Handset,
    Breakpoints.Tablet,
    Breakpoints.Web,
    Breakpoints.HandsetPortrait,
    Breakpoints.TabletPortrait,
    Breakpoints.Web,
    Breakpoints.HandsetLandscape,
    Breakpoints.TabletLandscape,
    Breakpoints.WebLandscape, */
    ])
      .subscribe(result => {
        this.isSmallScreen = result.matches;
      });
  }

  /* Gestion de l'utilisateur */

   onToggleClose() {
    this.closeSideNav.emit();
  }

  ngOnInit() {
    this.auth = this.authenticationService;    
  }

  /* Get Login status */
  get isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn;
  }

  /* Log out */
  logout() {
    this.auth.logout(); 
    this.router.navigate(['/research']);  
  }

}
